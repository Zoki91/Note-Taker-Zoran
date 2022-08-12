// Require Express Module 
const express = require('express');

// Port Listening On
const PORT = process.env.PORT || 3001;

const app = express();
const path = require('path');
const fs = require('fs');
const routes = require('./routes/notes')

// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Adding a static middleware for serving assets in the public folder
app.use(express.static('public'));
app.use(routes);

// Server Port
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
