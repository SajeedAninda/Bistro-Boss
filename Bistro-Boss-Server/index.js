const express = require('express')
let cors = require("cors");
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());



const port = process.env.PORT || 5000


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `${process.env.DB_URI}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // DATABASE COLLECTIONS 
        let menuCollection = client.db("BistroBossDB").collection("menu");
        let cartCollection = client.db("BistroBossDB").collection("cart");
        let userCollection = client.db("BistroBossDB").collection("users");
        let paymentCollection = client.db("BistroBossDB").collection("paymentInfo");



        // ==========================JWT==========================================

        // POST REQUEST TO JWT AFTER LOGIN 
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            // console.log(user);

            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '365d'
            });

            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: false
                })
                .send({ success: true })
        })

        // DELETE TOKEN COOKIES WITH JWT AFTER USER LOGS OUT 

        app.post("/logout", (req, res) => {
            let user = req.body;
            res
                .clearCookie("token", { maxAge: 0 })
                .send({ message: "success" })
        })

        const verifyToken = async (req, res, next) => {
            const token = req.cookies?.token;
            if (!token) {
                return res.status(401).send({ message: 'Not Authorized' })
            }
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message: 'unauthorized access' })
                }
                req.decoded = decoded;
                // console.log(req.user.email);
                next();
            })
        }

        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            // console.log(email);
            const query = { email: email };

            try {
                const user = await userCollection.findOne(query);
                const isAdmin = user?.role === "admin";

                if (!isAdmin) {
                    return res.status(401).send({ message: 'Not Authorized' });
                }

                next();
            } catch (error) {
                console.error("Error in verifyAdmin:", error);
                return res.status(500).send({ message: 'Internal Server Error' });
            }
        }



        // ====================== PUBLIC DATA ====================================
        // GET ALL MENU DATA 
        app.get("/menu", async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result);
        });



        // ========================= USER BASED DATA ==============================
        // POST CART DATA 
        app.post("/cart", verifyToken, async (req, res) => {
            try {
                const cartData = req.body;
                const { currentUserEmail, prevId } = cartData;
                const existingCartItem = await cartCollection.findOne({
                    currentUserEmail,
                    prevId,
                });

                if (existingCartItem) {
                    return res.status(400).send("Product already exists in the cart");
                }

                const result = await cartCollection.insertOne(cartData);
                res.send(result);
            } catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });

        // GET USER SPECIFIC DATA FROM CART 
        app.get("/cart/:currentUserEmail", verifyToken, async (req, res) => {
            try {
                const currentUserEmail = req.params.currentUserEmail;
                const userCart = await cartCollection.find({ currentUserEmail }).toArray();
                res.send(userCart);
            } catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });


        // DELETE CART DATA FROM USER CART
        app.delete("/cart/:id", verifyToken, async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        });

        //   POST USER DATA AFTER SIGN UP 
        app.post("/registeredUsers", async (req, res) => {
            const userDetails = req.body;
            let checkEmail = userDetails.email;
            const existingUser = await userCollection.findOne({ email: checkEmail });

            if (existingUser) {
                return res.status(409).json({ error: 'Email already exists' });
            }

            let result = await userCollection.insertOne(userDetails);
            res.send(result);
        });

        // GET USER SPECIFIC DATA FROM PAYMENT HISTORY 
        app.get("/paymentHistory/:email", verifyToken, async (req, res) => {
            const email = req.params.email;
            const query = {
                email: email
            };
            const result = await paymentCollection.find(query).toArray();
            res.send(result);
        });


        // =============== ADMINISTRATOR =============================
        // CHECK IF THE CURRENT USER IS ADMIN 
        app.get("/checkAdmin/:email", verifyToken, async (req, res) => {
            const userEmail = req.params.email;
            try {
                const existingUser = await userCollection.findOne({ email: userEmail });
                if (existingUser) {
                    if (existingUser.role === "admin") {
                        res.status(200).json(true);
                    } else {
                        res.status(200).json(false);
                    }
                } else {
                    res.status(404).json({ error: 'User not found' });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });

        // GET ALL USERS 
        app.get("/registeredUsers", verifyToken, verifyAdmin, async (req, res) => {
            const result = await userCollection.find({ role: "user" }).toArray();
            res.send(result);
        });

        // GET ALL ADMINS 
        app.get("/registeredAdmins", verifyToken, verifyAdmin, async (req, res) => {
            const result = await userCollection.find({ role: "admin" }).toArray();
            res.send(result);
        });

        // UPDATE USER ROLE 
        app.patch('/updateUserRole/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updateDoc = {
                $set: {
                    role: "admin"
                }
            }
            const result = await userCollection.updateOne(filter, updateDoc);
            res.send(result);
        });

        // DELETE A USER 
        app.delete("/deleteUser/:id", verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await userCollection.deleteOne(query);
            res.send(result);
        });

        // POST ITEMS TO MENU AS AN ADMIN
        app.post("/menu", verifyToken, verifyAdmin, async (req, res) => {
            const items = req.body;
            const result = await menuCollection.insertOne(items);
            res.send(result);
        });

        // DELETE ITEMS FROM MENU AS AN ADMIN 
        app.delete("/menu/:id", verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await menuCollection.deleteOne(query);
            res.send(result);
        });

        // GET MENU ITEM ACCORDING TO ID AS AN ADMIN 
        app.get("/menu/:id", verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await menuCollection.findOne(query);
            res.send(result);
        });

        // UPDATE MENU ITEMS AS AS ADMIN 
        app.patch("/menu/:id", verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const menuItem = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedMenu = {
                $set: {
                    name: menuItem.name,
                    recipe: menuItem.recipe,
                    image: menuItem.image,
                    category: menuItem.category,
                    price: menuItem.price,
                },
            };
            const result = await menuCollection.updateOne(
                filter,
                updatedMenu,
                options
            );
            res.send(result);
        });

        // GET ALL STATISTICS FOR ADMIN HOME 
        app.get("/adminStats", verifyToken, verifyAdmin, async (req, res) => {
            let userCount = await userCollection.countDocuments({ role: "user" });
            let productsCount = await menuCollection.estimatedDocumentCount();
            let ordersCount = await paymentCollection.estimatedDocumentCount();

            let revenueResult = await paymentCollection.aggregate([
                {
                    $group: {
                        _id: null,
                        totalAmount: { $sum: '$price' }
                    }
                }
            ]).toArray();

            let revenueCount = revenueResult.length > 0 ? revenueResult[0].totalAmount : 0;

            res.send({ users: userCount, products: productsCount, orders: ordersCount, revenue: revenueCount });
        })

        //==================== STRIPE PAYMENT RELATED ENDPOINTS =============================

        // STRIPE PAYMENT INTENT 
        app.post("/create-payment-intent", verifyToken, async (req, res) => {
            const { price } = req.body;
            const amount = parseInt(price * 100);
            // console.log(amount);

            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: "usd",
                payment_method_types: ["card"],
            });

            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        });

        // POST PAYMENT INFO AFTER PAYMENT IS DONE AND DELETE CART DATA 
        app.post('/payments', verifyToken, async (req, res) => {
            const payment = req.body;
            const paymentResult = await paymentCollection.insertOne(payment);

            const query = {
                _id: {
                    $in: payment.cartIds.map(id => new ObjectId(id))
                }
            };

            const deleteResult = await cartCollection.deleteMany(query);

            res.send({ paymentResult, deleteResult });
        })


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Bistro Server Running!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
