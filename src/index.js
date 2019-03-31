const express = require("express");
const path = require("path");

let app = express();

let personRoute = require("./routes/person");

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  next();
});

app.use(personRoute);
app.use(express.static("public"));

app.use((req, res, next) => {
  res.status(404).send("we think you are lost");
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.sendFile(path.join(__dirname, "../public/500.html"));
});
app.listen(3000, () => console.info("Server Started"));
