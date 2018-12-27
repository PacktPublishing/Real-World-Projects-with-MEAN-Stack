const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const config = require('./config')

const Product = require('./models/product');

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoURL,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/seeddb', (req, res) => {
  const data = [
    {
      _id: "5c1671285d7250149bef37a0",
      name: "JavaScript Mobile Application Development",
      description:
        "Whether you are developing a mobile app for iPad or on a Windows Phone, you need to learn the specific languages and technologies for that device. This is where Apache Cordova shines. This book is the learning resource to use when you want to efficiently develop your own mobile applications using Apache Cordova as the platform for your HTML, CSS, and JavaScript. In order to develop good-looking mobile applications, this book also utilizes jQuery Mobile. jQuery Mobile is one of the best available frameworks for developing mobile-friendly web applications. After finishing this book, you should be able to develop your very own mobile application on different mobile platforms using only JavaScript, without having to learn the native programming languages of every mobile platform.",
      image: "/assets/one.jpg",
      price: 10,
      __v: 0
    },
    {
      _id: "5c1671285d7250149bef37a3",
      name: "JavaScript Promises Essentials",
      description:
        "Promises are a new programming paradigm in JavaScript that allow developers to request data that they don't have yet and deal with it at a non-determined point in the future (asynchronously). Starting with the basics of the promise objects, we'll be able to leverage the maximum capabilities of promises when writing applications. \n This book starts by giving you some background information on the asynchronous programming model in JavaScript, recognizing its importance in JavaScript programming. It then walks you through the key concepts and intricacies of the Promises API. Following that, you will learn how you can write complex asynchronous operations with chained promises and be able to catch and handle exceptions. With this book, you'll learn how to write better asynchronous operations using JavaScript promises.",
      image: "/assets/two.jpg",
      price: 16,
      __v: 0
    },
    {
      _id: "5c1671285d7250149bef37a1",
      name: "Getting Started with Apache Maven",
      description:
        "Building projects rapidly and incrementally is a critical part of a developer’s job. Getting Started with Apache Maven will show you how to take advantage of the common elements of project building and implement effective methods to solve frequently encountered problems, as well as facilitating collaborative development among projects. \n Getting Started with Apache Maven will introduce you to the world of synergized development in the Maven ecosystem. The course logically explains the various concepts of the tool, and shows how to proceed from simple assignments to complex ones. \n Maven is not simply a tool to invoke compilers and utilities, but it is also an approach to easily constructing your project by accessing its ever-expanding world of tools and libraries.",
      image: "/assets/three.jpg",
      price: 6,
      __v: 0
    },
    {
      _id: "5c1671285d7250149bef37a2",
      name: "Begin Python Programming in 7 Days ",
      description:
        "We get you started setting up your environment and the tools you need to start programming in Python. You will be learning about variables and operators and how to make use of them in Python programs. You will learn all about control flow statements and loops in Python and you will be using them in your programs to solve your coding problems. \n Then you will learn to use Python's advanced data structures such as lists and dictionaries. You will be able to organize in functions and save time coding by writing code that can be reused. Then, you will learn about Python modules and how to make use of them. On the last day, you will start interacting with files using Python code.",
      image: "/assets/four.png",
      price: 13,
      __v: 0
    },
    {
      _id: "5c1671285d7250149bef37a4",
      name: "Mastering PostgreSQL 11 - Second Edition",
      description:
        "This second edition of Mastering PostgreSQL 11 helps you build dynamic database solutions for enterprise applications using the latest release of PostgreSQL, which enables database analysts to design both the physical and technical aspects of the system architecture with ease. \n This book begins with an introduction to the newly released features in PostgreSQL 11 to help you build efficient and fault-tolerant PostgreSQL applications. You’ll examine all of the advanced aspects of PostgreSQL in detail, including logical replication, database clusters, performance tuning, monitoring, and user management. You will also work with the PostgreSQL optimizer, configuring PostgreSQL for high speed, and see how to move from Oracle to PostgreSQL. As you progress through the chapters, you will cover transactions, locking, indexes, and optimizing queries to improve performance. Additionally, you’ll learn to manage network security and explore backups and replications, while understanding the useful extensions of PostgreSQL so that you can optimize the speed and performance of large databases.",
      image: "/assets/five.png",
      price: 121,
      __v: 0
    },
    {
      _id: "5c1671285d7250149bef37a6",
      name: "Introduction to Kotlin Programming ",
      description:
        "Kotlin is an object-oriented language that primarily targets Android. You will learn how to set up the environment and take your first steps with Kotlin and its syntax. We will cover the basics of the language, including functions, variables, and basic data types. With the basics covered, the next chapters show how functions are first-class citizens in Kotlin and deal with the object-oriented side of Kotlin.",
      image: "/assets/six.png",
      price: 19,
      __v: 0
    },
    {
      _id: "5c1671285d7250149bef37a8",
      name: "Hands-On Cloud Solutions with Azure",
      description:
        "Azure provides cloud-based solutions to support your business demands. Building and running solutions on Azure will help your business maximize the return on investment and minimize the total cost of ownership. \n Hands-On Cloud Solutions with Azure focuses on addressing the architectural decisions that usually arise when you design or migrate a solution to Microsoft Azure. You will start by designing the building blocks of infrastructure solution on Azure, such as Azure compute, storage, and networking, followed by exploring the database options it offers. You will get to grips with designing scalable web and mobile solutions and understand where to host your Active Directory and Identity Solution. Moving on, you’ll learn how to extend DevOps to Azure. \n You will also beneft from some exciting services that enable extremely smooth operations and streamlined DevOps between on-premises and cloud. The book will help you to design a secure environment for your solution, on both the Cloud and hybrid. Toward the end, you’ll see how to manage and monitor cloud and hybrid solutions.",
      image: "/assets/seven.png",
      price: 99,
      __v: 0
    }
  ];
  data.forEach((product) => {
    const newProduct = new Product({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.product,
    });
    newProduct.save();
  })  
  res.send("ok")
})
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(3000, () => console.log("Listening on port 3000..."));
