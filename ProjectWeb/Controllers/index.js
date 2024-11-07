// Import necessary modules
const express = require('express');
const router = express.Router();

// Define routes for the pages
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/project', (req, res) => {
  res.render('project');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

// Export the router to use in app.js
module.exports = router;
 