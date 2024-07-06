const mongoose = require("mongoose");

const DB_CONNECTION = () => {
  mongoose.connect(process.env.DB_CONNECTION).then((conn) => {
    console.log(conn.connection.host);
  });
};

module.exports = DB_CONNECTION;
