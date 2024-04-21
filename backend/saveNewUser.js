const { client } = require('./database/connectDb');
const User = require("./database/models/User");

async function addNewUser(userData) {
  try {
  
    const database = client.db('engagePlus');
    const users = database.collection('user'); // Assuming 'user' is the collection name

    // Create a new user object
    const newUser = new User(userData);

    
    await users.insertOne(newUser);
    console.log("New user saved:", newUser);
  } catch (error) {
    console.error("Error adding new user:", error);
  }
}

module.exports = addNewUser;
