const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const queries = require("./queries");

app.get("/", (req, res) => {
    queries.listAll().then(things => res.send(things))
})

app.listen(port)