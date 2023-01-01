const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://mongo:27017/todo-loo", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connection Successful."))
  .catch((err) => console.log(err));

app.post("/login", (req, res) => {
  console.log(
    `Username: ${req.params.username}\nPassword: ${req.body.password}`
  );
  res.end(JSON.stringify({ username: "response", password: "response" }));
  // res.redirect("/");
});

app.post("/register", (req, res) => {
  console.log(
    `Username: ${req.body.username}\nEmail: ${req.body.email}\nPassword: ${req.body.password}\nConfirm: ${req.body.confirmPassword}\n`
  );
  res.redirect("/");
});

app.get("/", (req, res) => {
  console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
