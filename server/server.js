const express = require('express');
const db = require('./db.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

app.get('/api/tests', async (req, res) => {
  console.log(req.method);
  let response = await db.getAllFromDb();
  console.log(response);
  res.json(response);
});

app.post('/api/tests', (req, res) => {
  console.log(req.method, ' request with body ', req.body);
  // req.body expect {name, url, isPidgeon}
  db.saveToDb(req.body);
  res.send();
});

app.patch('/api/tests', (req, res) => {
  console.log(req.method, ' request with body ', req.body);
  // req.body expect {name, url, isPidgeon}
  db.editInDb(req.body);
  console.log('patch complete in server')
  res.send();
});

app.delete('/api/tests', (req, res) => {
  console.log(req.method, ' request with body ', req.body);
  // req.body expect {name, url, isPidgeon}
  db.deleteFromDb(req.body);
  console.log('delete complete in server')
  res.send();
});