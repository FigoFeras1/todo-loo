const authRouter = require("./routes/authRoutes");
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

app.get("/", (req, res) => {
  console.log(`Username: ${req.body.username}\nPassword: ${req.body.password}`);
});

app.use("/", authRouter);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
