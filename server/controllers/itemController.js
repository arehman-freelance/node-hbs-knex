// const knex = require('../db/connection')
const knex = require("../db/connection.js");


// View Users
exports.view = (req, res) => {
  console.log(req.query)

  let query = knex('item');

  query.then(rows => {
    res.render('item', { rows});

    // console.log('The data from user table: \n', rows);
  }).catch(err => {
    console.log(err);

  });

}

// Edit user
exports.edit = (req, res) => {
  knex('item')
    .where({ id: req.params.id })
    .then(rows => {
      res.render('edit-item', { rows });
    }).catch(err => {
      console.log(err);

    });
}


// Update User
exports.update = (req, res) => {
  const { item_code, item_name, gross_price, tax_rate, tax_amount, net_price } = req.body;
  knex('item')
    .where({ id: req.params.id })
    .update({ item_code, item_name, gross_price, tax_rate, tax_amount, net_price })
    .then(rows => {
      res.render('edit-item', { rows, alert: `${item_code} has been updated.` });
    }).catch(err => {
      console.log(err);

    });
}

