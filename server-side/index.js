require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb"); // Import MongoClient
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// -------------------------------------------------

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.18ceobk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect(); // Connect the client to the server
    const todoCollection = client.db("todo").collection("allTodo");

    //   get all todos
    app.get("/todos", async (req, res) => {
      const result = await todoCollection.find({}).toArray();
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

// --------------------------------------------------------------

// Respond with a message for the root route
app.get("/", (req, res) => {
  res.send("Todo server is running");
});

// Start the server
app.listen(port, () => {
  console.log(`Todo Server is running on port ${port}`);
});
