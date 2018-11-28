const express = require("express");
const app = express();
const port = 3000;
const queries = require("./queries");

app.get("/", (req, res) => {
    queries.listAll().then(examples => res.send(examples))
})

app.listen(port)