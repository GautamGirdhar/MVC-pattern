const mongodbStore = require('connect-mongodb-session');

function createSessionStore(session) {
    const MongoDBStore = mongodbStore(session);
    const sessionStore = new MongoDBStore({
    uri: 'mongodb+srv://girdhargautam6:G%40ut%40m%4010122004@cluster0.i41grdl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    databaseName: 'auth-demo',
    collection: 'sessions'
  });

  return sessionStore
}

function createSessionConfig(sessionStore) {
    return {
        secret: 'super-secret',
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: {
          maxAge: 2 * 24 * 60 * 60 * 1000
        }
      };
}

module.exports = {
    createSessionStore: createSessionStore,
    createSessionConfig: createSessionConfig
};