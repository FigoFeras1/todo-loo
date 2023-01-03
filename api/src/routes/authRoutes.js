const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

router.post("/login", (req, res) => {
  console.log(JSON.stringify("user"));
  User.findOne({ username: req.body.username })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then((passwordMatches) => {
          if (!passwordMatches) {
            return res.status(400).send({
              message: "Passwords do not match",
              err,
            });
          }

          const token = jwt.sign(
            {
              userId: user._id,
              username: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          res.status(200).send({
            message: "Login successful",
            username: user.username,
            token,
          });
        })
        .catch((err) => {
          res.status(400).send({
            message: "Passwords do not match",
            err,
          });
        });
    })
    .catch((err) => {
      res.status(404).send({
        message: "User not found",
        err,
      });
    });
});

router.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, 16)
    .then((hashedPassword) => {
      const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User created successfully.",
            result,
          });
        })
        .catch((err) => {
          res.status(500).send({
            message: "Failed to create user.",
            err,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Failed to hash password.",
        err,
      });
    });
});

module.exports = router;
