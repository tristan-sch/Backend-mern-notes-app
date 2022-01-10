const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors()); //telling express to use the cors middleware
app.use(express.json());

mongoose.connect(
  "mongodb+srv://tristan:UcWtV4r9IljVDaCW@cluster0.tdpag.mongodb.net/notesDB?retryWrites=true&w=majority"
);

app.use("/", require("./routes/noteRoute"));
app.get("/", (req, res) => {
  res.send("hello world");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
