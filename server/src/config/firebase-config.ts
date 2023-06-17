var admin = require("firebase-admin");

var serviceAccount = require("./fire-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
