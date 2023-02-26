const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "california",
  password: "550121515",
  port: 5433,
});

module.exports = pool;
