require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); // Import MongoClient
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

    // get category wise todo
    app.get("/todo/:category", async (req, res) => {
      const category = req.params.category;

      try {
        const result = await todoCollection.find({ category }).toArray();
        res.json(result);
      } catch (error) {
        console.error("Error fetching todos by category:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // add attachment in specific category
    app.post("/add-attachment/:category/:id", async (req, res) => {
      const category = req.params.category;
      const id = req.params.id;
      const attachments = req.body;

      try {
        const selectedCategory = await todoCollection.findOneAndUpdate(
          { category, "todos._id": id },
          { $push: { "todos.$.attachment": { $each: attachments } } }
        );

        if (!selectedCategory.value) {
          return res.status(404).json({ error: "Category or Todo not found" });
        }

        return res
          .status(200)
          .json({ message: "Attachments added successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      }
    });

    // add message in specific todo
    app.post("/add-message/:category/:id", async (req, res) => {
      const category = req.params.category;
      const id = req.params.id;
      const message = req.body;
      console.log(message);
      try {
        const selectedCategory = await todoCollection.findOneAndUpdate(
          { category, "todos._id": id },
          { $push: { "todos.$.message": message } }
        );

        if (!selectedCategory.value) {
          return res.status(404).json({ error: "Category or Todo not found" });
        }

        return res.status(200).json({ message: "Message added successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      }
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
