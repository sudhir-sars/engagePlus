const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://sudhirsars:oY0YSJFLzNQhLbZi@cluster0.lgxwmoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Assuming environment variable

const client = new MongoClient(uri);

async function connectDb() {
  try {
    await client.connect(); // Establish connection to the MongoDB server
    database=client.db('engagePlus');
    console.log("Connected to MongoDB server");
  } catch(error) {
    console.error("Error connecting to database:", error);
  }
}

module.exports = {
  connectDb,
  client,
};
