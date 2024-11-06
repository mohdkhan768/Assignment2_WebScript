// Import necessary modules
const express = require('express');
const router = express.Router();

// Define routes for the pages
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

router.get('/project', (req, res) => {
  res.render('project', { title: 'Projects' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

// Export the router to use in app.js
module.exports = router;
