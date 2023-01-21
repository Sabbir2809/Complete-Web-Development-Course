const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config();
// middleware
app.use(cors());
app.use(express.json());

//);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.an7cx.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Genius Car is Running');
});

app.listen(port, () => {
  console.log(`Genius Car Server Running on Port ${port}`);
});
