const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Change if needed for your MongoDB server
const dbName = 'Nirman-Setu';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    throw err;
  }
}

module.exports = { connectDB };
