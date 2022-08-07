const express = require('express');
const path = require('path');

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Adding a static middleware for serving assets in the public folder
app.use(express.static('public'));

// Get Route for Home Page | (07 Ins_GET-Fetch - Classroom Homework)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Get Route for Notes Page | (07 Ins_GET-Fetch - Classroom Homework)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Wildcard route to direct users back | (28-Stu_Mini-Project - Classroom Homwork)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Server Port
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
