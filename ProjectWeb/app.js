// Import necessary modules
const express = require('express');
const path = require('path');
const layouts = require('express-ejs-layouts');

const app = express();
const indexRouter = require('./public/controllers/index');

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Enable layouts middleware
app.use(layouts);
app.set('layout', 'layout'); // Specify layout template name (without .ejs)

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
