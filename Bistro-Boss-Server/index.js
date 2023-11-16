const express = require('express')
let cors = require("cors");
const app = express()
require('dotenv').config()

app.use(cors());
app.use(express.json());

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


        // GET ALL MENU DATA 
        app.get("/menu", async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result);
        });

        // POST CART DATA 
        app.post("/cart", async (req, res) => {
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
        app.get("/cart/:currentUserEmail", async (req, res) => {
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
        app.delete("/cart/:id", async (req, res) => {
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
