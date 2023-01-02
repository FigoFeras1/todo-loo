const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://mongo:27017/todo-loo", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connection Successful."))
  .catch((err) => console.log(err));

app.post("/login", (req, res) => {
  console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`);
  res.end(JSON.stringify(req.body));

  // res.redirect("/");
});

app.post("/register", (req, res) => {
  console.log(
    `Username: ${req.body.username}\nEmail: ${req.body.email}\nPassword: ${req.body.password}\nConfirm: ${req.body.confirmPassword}`
  );
  res.end(JSON.stringify(req.body));
  // res.redirect("/");
});

app.get("/", (req, res) => {
  console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
