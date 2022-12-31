const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:27017/todo-loo", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connection Successful."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
