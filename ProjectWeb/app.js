// Import necessary modules
const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./controllers/index');

// Set up the view engine and views folder, and imported routes
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter)

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
