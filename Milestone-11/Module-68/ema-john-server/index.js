// import
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// call
const app = express();

// port
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.an7cx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const productCollection = client.db('emaJohn').collection('products');

    // Read
    app.get('/products', async (req, res) => {
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      // console.log(page, size);
      const query = {};
      const cursor = productCollection.find(query);
      const products = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
      const count = await productCollection.estimatedDocumentCount();
      res.send({ count, products });
    });

    // post
    app.post('/productsByIds', async (req, res) => {
      const ids = req.body;
      const objectIds = ids.map((id) => ObjectId(id));
      const query = { _id: { $in: objectIds } };
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });
  } finally {
    //
  }
}

run().catch((error) => console.error(error));

// root default API
app.get('/', (req, res) => {
  res.send('Ema John Server');
});

app.listen(port, (req, res) => {
  console.log(`Ema-John-Server Running on: ${port}`);
});
