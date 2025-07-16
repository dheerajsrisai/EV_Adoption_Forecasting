const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Submission:", name, email, message);
  // Optionally store in DB or send email
  res.send("Thank you for contacting me!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
