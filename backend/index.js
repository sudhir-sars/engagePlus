const {connectDb} = require('./database/connectDb');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
const addNewUser=require("./saveNewUser")


app.use(bodyParser.json()); 
connectDb();
// Port to listen on (default: 3000)
// Load environment variables from .env file








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

app.post('/adduser', (req, res) => {
  addNewUser(req.body)
  res.send({"sucess":req.body});
});


app.post('/aiassist', async (req, res) => {
  

  const prompt = req.body.prompt; // Corrected typo

  console.log(`this is prompt from user: ${prompt}`);

  try {
    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    };

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-proj-1c9xycVaIgyNUpdz2tPfT3BlbkFJ7oXHIrOdHoe1Hm24BsnH`
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data.choices[0].message.content);
    res.send(JSON.stringify(data.choices[0].message.content));
  } catch (error) {
    console.error('There was a problem:', error);
    res.status(500).send('Internal Server Error');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
