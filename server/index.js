const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8000;

// middleware
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://joychandrauday.web.app",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Verify Token Middleware
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  console.log("Token from cookies:", token);
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};
const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const projectCollection = client
      .db("portfolio-joychandrauday")
      .collection("projects");
    const blogCollection = client
      .db("portfolio-joychandrauday")
      .collection("blogs");

    // auth related api
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      console.log("I need a new jwt", user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true, token });
    });

    // Logout
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
        console.log("Logout successful");
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // create a new project
    app.post("/projects", async (req, res) => {
      const newProject = req.body;
      await projectCollection.insertOne(newProject);
      res
        .status(201)
        .json({ message: "Product added successfully", product: newProject });
    });
    // update a project
    app.delete("/projects/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };

      const result = await projectCollection.deleteOne(query);
      res.send(result);
    });
    // Save or modify user email, status in DB
    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email };
      const options = { upsert: true };
      const isExist = await usersCollection.findOne(query);
      console.log("User found?----->", isExist);
      if (isExist) return res.send(isExist);
      const result = await usersCollection.updateOne(
        query,
        {
          $set: { ...user, timestamp: Date.now() },
        },
        options
      );
      res.send(result);
    });
    //projects
    app.get("/projects", async (req, res) => {
      const cursor = projectCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    //blogs
    app.get("/blogs", async (req, res) => {
      const cursor = blogCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/blog/:slug", async (req, res) => {
      try {
        const { slug } = req.params;
        const query = { slug: slug };

        // Use findOne to get a single document
        const blog = await blogCollection.findOne(query);

        // Check if the blog post exists
        if (!blog) {
          return res.status(404).send({ message: "Blog not found" });
        }

        // Send the found blog post
        res.send(blog);
      } catch (error) {
        // Handle any errors that occur during the operation
        console.error("Error fetching blog:", error);
        res.status(500).send({ message: "Server error" });
      }
    });
    app.get("/blogs/:category", async (req, res) => {
      try {
        const { category } = req.params;
        const query = { category: category };

        // Use findOne to get a single document
        const relatedBlogs = await blogCollection.find(query).toArray();

        // Check if the blog post exists
        if (!relatedBlogs) {
          return res.status(404).send({ message: "Blogs not found" });
        }

        // Send the found blog post
        res.send(relatedBlogs);
      } catch (error) {
        // Handle any errors that occur during the operation
        console.error("Error fetching blog:", error);
        res.status(500).send({ message: "Server error" });
      }
    });
    // POST route to add a comment to a blog
    app.post("/blog/:slug/comment", async (req, res) => {
      const { slug } = req.params;
      const { userName, email, image, comment } = req.body;

      const newComment = {
        userName,
        email,
        image,
        comment,
        commentDate: new Date().toISOString(), // Add current date and time
      };

      try {
        const blog = await blogCollection.findOneAndUpdate(
          { slug: slug },
          { $push: { comments: newComment } },
          { new: true } // Return the updated document
        );

        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(blog);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding comment" });
      }
    });
    // Example: Express.js route to increment view count
    app.patch("/blog/:slug/view", async (req, res) => {
      const { slug } = req.params;
      try {
        const blog = await blogCollection.findOneAndUpdate(
          { slug },
          { $inc: { views: 1 } }, // Increment the views field by 1
          { new: true }
        );
        if (!blog) {
          return res.status(404).send({ message: "Blog not found" });
        }
        res.send(blog);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from joychandrauday Server..");
});

app.listen(port, () => {
  console.log(`Portfolio server is running on port ${port}`);
});
