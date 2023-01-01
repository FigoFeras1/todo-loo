const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://mongo:27017/todo-loo", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connection Successful."))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`);
  console.log(JSON.stringify(req.body));

  res.redirect("/");
});

app.get("/", (req, res) => {
  console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
