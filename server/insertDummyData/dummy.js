const mongoose = require("mongoose");
const Question = require("../models/question"); // Adjust the path to your model

// Replace this with your MongoDB Atlas connection URL
const mongoURI ="mongodb+srv://rajputsundram:PgS8nfkiK6ussEbz@search.5ncf2.mongodb.net/search"
// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully to MongoDB Atlas");

    // Define dummy data
    const dummyData = [
      {
        title: "Introduction to JavaScript",
        description: "A beginner's guide to JavaScript, covering the basics of syntax, variables, and control structures.",
      },
      {
        title: "Advanced JavaScript Concepts",
        description: "In-depth look at JavaScript closures, async/await, and promises.",
      },
      {
        title: "MongoDB for Beginners",
        description: "Learn how to set up and use MongoDB, a NoSQL database, to store data for your web applications.",
      },
      {
        title: "React Fundamentals",
        description: "An introduction to React, a powerful JavaScript library for building user interfaces.",
      },
      {
        title: "Node.js and Express.js",
        description: "Setting up a backend with Node.js and Express.js to handle HTTP requests and serve data.",
      },
      {
        title: "Web Development with HTML & CSS",
        description: "Building the structure and style of web pages using HTML and CSS.",
      },
      {
        title: "Python Programming for Data Science",
        description: "A course on Python programming focused on data science libraries such as NumPy and Pandas.",
      },
      {
        title: "Machine Learning Basics",
        description: "A beginner's guide to machine learning, exploring key concepts, algorithms, and libraries.",
      },
      {
        title: "Introduction to Databases",
        description: "Understanding relational and non-relational databases, including SQL and MongoDB.",
      },
      {
        title: "UI/UX Design Principles",
        description: "Learning the fundamentals of UI and UX design to create intuitive and user-friendly interfaces.",
      },
    ];

    // Insert dummy data into MongoDB Atlas database
    Question.insertMany(dummyData)
      .then(() => {
        console.log("Dummy data inserted successfully");
        mongoose.connection.close(); // Close the database connection after insertion
      })
      .catch((error) => {
        console.error("Error inserting dummy data:", error);
        mongoose.connection.close(); // Close the connection in case of an error
      });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
