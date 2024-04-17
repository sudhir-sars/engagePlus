const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
// Port to listen on (default: 3000)
const port = process.env.PORT || 3000;
// Enable CORS for all routes
app.use(cors());
// Basic route handler (responds with "Hello World!")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/email', (req, res) => {
  console.log(req.body);
  res.send(sucess);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
