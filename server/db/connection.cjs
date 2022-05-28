// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    pool: { min: 0, max: 7 }
  });

// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: 'mariadb',
//     user: 'root',
//     password: '123',
//     database: 'usermanagement_tut'
//   },
//   pool: { min: 0, max: 7 }
// });
  module.exports = knex
  // export default knex;