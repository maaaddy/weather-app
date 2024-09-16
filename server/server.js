import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const API = process.env.API_KEY;
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;


app.get('/users', async (_req, res) => {
  try {
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const userInfo = await collection.find({}).toArray();
      
      // Close the MongoDB connection
      await client.close();

      res.json(userInfo);
  } 
  catch (err) {
      console.error("Error:", err);
      res.status(500).send("Hmmm, something smells... No data for you!");
  }
});

app.post('/getWeather', async (_req, res) => {
  try {
      const {zipCode} = _req.body;
      console.log(zipCode);
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API}&q=${zipCode}&aqi=yes`);
      console.log(response);
      
      const data = await response.json(); // Parse the JSON response
      res.json(data);
  } 
  catch (err) {
      console.error("Error:", err);
      res.status(500).send("Hmmm, something smells... No data for you!");
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const user = await collection.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Close the MongoDB connection
    await client.close();

    // Return success if login is valid
    res.status(200).json({ message: 'Login successful' });
    
  } 
  catch (err) {
    console.error("Error:", err);
    res.status(500).send("Hmmm, something smells... No data for you!");
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});