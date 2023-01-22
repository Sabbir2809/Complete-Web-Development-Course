const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

async function run() {
  try {
    const serviceCollection = client.db('geniusCar').collection('services');
    const orderCollection = client.db('geniusCar').collection('orders');

    // services API
    app.get('/services', async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });

    app.get('/services/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.send(service);
    });

    // Orders API
    app.get('/orders', async (req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query.email) {
        query = {
          email: req.query.email,
        };
      }
      const cursor = orderCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });

    app.post('/orders', async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.send(result);
    });
  } finally {
    console.log('Done');
  }
}

run().catch((error) => console.error(error));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Genius Car is Running');
});

app.listen(port, () => {
  console.log(`Genius Car Server Running on Port ${port}`);
});
