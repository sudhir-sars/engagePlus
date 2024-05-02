const { client } = require('./database/connectDb');
const User = require("./database/models/User");

async function login(credentials) {
  try {
    
    const database = client.db('engagePlus');
    const users = database.collection('user');
    console.log(credentials.email);
    console.log(credentials.password);
    // Assuming 'username' and 'password' are fields in the credentials object
    const user = await users.findOne({ email: credentials.email, password: credentials.password });

    if (!user) {
      console.log("not found")
      return {success:false}
    }

    // Perform your login logic here, such as setting session variables or generating tokens
    console.log('User logged in:', user);
    
    // Return the user object or any other relevant data
    return {success:true,username:user.name}
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Rethrow the error to handle it at the caller level
  }
}

module.exports = login;
