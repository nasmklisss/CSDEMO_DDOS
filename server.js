// Import required modules
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Store request count per IP
const requestCounts = {};

// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  handler: (req, res) => {
    res.send('Too many requests! Please try again later');
  },
  onLimitReached: (req, res, options) => {
    console.log(`Rate limit exceeded for IP: ${req.ip}`);
  }
});

// Apply rate limiting to all requests
app.use((req, res, next) => {
  const ip = req.ip;
  if (!requestCounts[ip]) {
    requestCounts[ip] = 0;
  }
  requestCounts[ip]++;

  next();
});

app.use(limiter);

// Define a simple route
app.get('/', (req, res) => {
  const ip = req.ip;
  const count = requestCounts[ip] || 0;
  let message = `Hello, World!`;

  if (count > 80) {
    message += `<p style="color: orange;">Warning: High number of requests detected! (${count}/100)</p>`;
  }
  res.send(message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
