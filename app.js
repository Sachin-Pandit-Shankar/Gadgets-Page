const express = require("express");
const app = express();

app.get("/gadgets", (request, response) => {
  response.senFile("../gadgets.html", { root: __dirname });
});
module.exports = app;
