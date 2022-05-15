const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => { console.log('Connected to MongoDB') })
    .catch(err => { console.log('Error connecting to MongoDB:', err.message) });
}

connect();

const testSchema = new mongoose.Schema({
  name: String,
  url: String,
  isPideon: Boolean
});

const Test = mongoose.model('Test', testSchema);

const saveToDb = async (test) => {
  const testToAdd = new Test(test);
  await testToAdd.save();
}

const getAllFromDb = async () => {
  return await Test.find();
}

module.exports = {
  connect,
  saveToDb,
  getAllFromDb,
}