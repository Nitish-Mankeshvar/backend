const mongoose = require("mongoose");

const db = async () => {
  const database = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return database;
};

module.exports = db;
