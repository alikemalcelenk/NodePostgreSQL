const Pool = require('pg').Pool;

//.env
require('dotenv').config();

const pool = new Pool({
  label: process.env.POOL_LABEL,
  host: process.env.POOL_HOST,
  user: process.env.POOL_USER,
  port: process.env.POOL_PORT,
  database: process.env.POOL_DB,
  password: process.env.POOL_PASSWORD,
});

module.exports = pool;
