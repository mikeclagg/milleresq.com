const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

// Create express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/contact', contactRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the Angular app
  app.use(express.static(path.join(__dirname, '../dist')));

  // For any other routes, return the Angular app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'An unexpected error occurred',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
