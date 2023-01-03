const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    req.user = jwt.verify(token, "RANDOM-TOKEN");
    console.log(JSON.stringify(req.user));

    next();
  } catch (err) {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};
