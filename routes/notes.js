const app = require("express").Router();
const fs = require("fs");
let api = require("../db/db.json");
const path = require("path");
const util = require('util');

// Get Route for Home Page | (07 Ins_GET-Fetch - Classroom Homework)
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Get Route for Notes Page | (07 Ins_GET-Fetch - Classroom Homework)
app.get('/notes', (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});


app.get('/api/notes', (_req, res) => {
  util.promisify(fs.readFile)('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Wildcard route to direct users back | (28-Stu_Mini-Project - Classroom Homwork)
app.get('*', (_req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);


app.post("/api/notes", (req, res) => {
  api.push(
    {
      id: Math.floor(Math.random() * 100),
      title: req.body.title,
      text: req.body.text,
    },
  );

  fs.writeFileSync("./db/db.json", JSON.stringify(api), function (err) {
    if (err) throw err;
  });
  res.json(api);
});

module.exports = app
