const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// //requiering express and initializing the app:
// const app = require("express")();
// //requiering the cors middleware:
// const cors = require("cors");

// const PORT = 5001; //we will use port 5001

mongoose.connect("mongodb+srv://tristan:UcWtV4r9IljVDaCW@cluster0.tdpag.mongodb.net/notesDB?retryWrites=true&w=majority")

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://tristan:UcWtV4r9IljVDaCW@cluster0.tdpag.mongodb.net/notesDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(cors()); //telling express to use the cors middleware
app.use(express.json());
app.use("/", require("./routes/noteRoute"));
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5001, () => {
  //listen to the port we chose above
  //print to the console that the server is listening
  console.log("listening to port 5001");
});
