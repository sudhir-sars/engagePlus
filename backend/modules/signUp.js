const { client } = require('./connectDb');
const User = require("../database/models/User");
const { signJwt } = require("./JwtModule");

require('dotenv').config();

const SignUp = async (userData) => {
  try {
    const database = client.db('engagePlus');
    const users = database.collection('user'); // Assuming 'user' is the collection name
    
    // Check if a user with the same email already exists
    const existingUser = await users.findOne({ email: userData.email });
    const res_JwtModule = signJwt(userData);
    if (existingUser) {
      return { success: false, message: 'User with this email already exists' };
    }
    if(!res_JwtModule.success){
      return { success: false, message: 'error in generating token' };
    }

    // Create a new user object
   
      const newUser = new User({
        name:userData.name,
        email:userData.email,
        password:userData.password,
        token:res_JwtModule.token
      });
      await users.insertOne(newUser);
    

    // Generate JWT token for the new user
    return {success:true,message:"user saved sucessfully",token:res_JwtModule.token,}
  } catch (err) {
    return { success: false, message: err };
  }
}

module.exports = SignUp;
