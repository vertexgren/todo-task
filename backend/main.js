
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');



const env = require('dotenv').config();
const fs = require('fs');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());


const client = new MongoClient(process.env.database, { useNewUrlParser: true, useUnifiedTopology: true });



app.use(cors());



app.get('/tasks', async(req, res) => {
  try {
    client.connect();
    collection = client.db('Todo').collection('List');
    const tasks = await collection.find({}).toArray();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put(`/edit/:id`, async (req, res) => {
  const id = parseInt(req.params.id); 
  const { title, description,status} = req.body;
  console.log(req.body);
  try {
    client.connect();
    collection = client.db('Todo').collection('List');

   if (title) {
      await collection.updateOne({ id }, { $set: { title } });
   }

    if (description) {
        await collection.updateOne({ id }, { $set: { description } });
    }
    if (status) {
      await collection.updateOne({ id }, { $set: { status } });
    }
  
    res.json('Task updated');
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/add', async (req, res) => {
  const { title, description} = req.body;
  try {
    client.connect();
    collection = client.db('Todo').collection('List');
    await collection.insertOne({ title, description,status:'Not Assigned' });
    res.json('Task added');
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
app.listen(6060, () => {
  console.log('Server is running on port 6060');
});