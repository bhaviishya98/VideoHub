const express = require("express")
const path = require("path")
const mongoose = require("mongoose")


mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "SIH" })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true, 
  },
  password:{
    type: String,
    required: true,
  }
});

const collection = mongoose.model("SIH Data", messageSchema);

const app = express();

const users = [];

const pathPublic = path.resolve();

app.use(express.static(path.join(pathPublic, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Bhavishya Gothwal" });
});

app.get("/add", async (req, res) => {
  await Message.create({ name: "Bhavishya2", email: "sample2@gmail.com" });
  res.send("Nice");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.post("/contact", async (req, res) => {
  const { name, email } = req.body;
  await Message.create({
    name,
    email,
    password,
  });
  res.redirect("/success");
});

app.listen(5000, () => {
  console.log("Server is working");
});
