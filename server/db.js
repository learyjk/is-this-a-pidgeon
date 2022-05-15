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
  isPidgeon: Boolean
});

const Test = mongoose.model('Test', testSchema);

const saveToDb = async (test) => {
  const testToAdd = new Test(test);
  await testToAdd.save();
}

const getAllFromDb = async () => {
  return await Test.find();
}

const editInDb = async (test) => {
  let _id = test._id;
  let fieldName = Object.keys(test)[1];
  let value = test[fieldName];
  return await Test.updateOne({ _id }, { [fieldName]: value });
}

const deleteFromDb = async (_idObj) => {
  return await Test.deleteOne(_idObj);
}

module.exports = {
  connect,
  saveToDb,
  getAllFromDb,
  editInDb,
  deleteFromDb,
}