const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://girdhargautam6:G%40ut%40m%4010122004@cluster0.i41grdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  );
  database = client.db('auth-blog');
}

function getDb() {
  if (!database) {
    throw { message: 'You must connect first!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
