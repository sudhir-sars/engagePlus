const {connectDb} = require('./modules/connectDb');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
const signUp=require("./modules/signUp")
const login =require("./modules/login")
const aiAssist=require("./modules/aiAssist");

require('dotenv').config();
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

app.post('/signUp', async(req, res) => {
  const res_SignUp=await signUp(req.body)
  res.send(res_SignUp);
});

app.post('/login', async(req, res) => {
  const res_login=await login(req.body);
  res.send(res_login)
});


app.post('/aiassist', async (req, res) => {
  const prompt = req.body.prompt; // Corrected typo
  const res_aiAssist=await aiAssist(prompt);
  res.send(res_aiAssist)

});


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
