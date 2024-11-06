// Import necessary modules
const express = require('express');
const path = require('path');
const app = express(); // Create the app instance

// Set the port number (can be changed or set to 3000 as a fallback)
const port = process.env.PORT || 3000;

// Set up the view engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, images, JS) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the routes from the controller
const siteRoutes = require('./controllers/index');
app.use('/', siteRoutes); // This sets up the routes to be used

// Start the server (This replaces the need for the server.js file)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
