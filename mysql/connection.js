const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "35.188.138.73",
        user: "root",
        password: "process.env.MYSQL_PASSWORD",
        database: "oneVote",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
