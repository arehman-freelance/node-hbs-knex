// const knex = require('../db/connection')
const knex = require("../db/connection.js");
const fu = require('../utils/file_upload.js');


// View Users
exports.view = (req, res) => {
  console.log(req.query)

  let query = knex('user')
    .where({ status: "active" });

  if (req.query.limit != 'All') {
    query.limit(req.query.limit);
  }


  query.then(rows => {
    let removedUser = req.query.removed;
    res.render('home', { rows, removedUser });

    // console.log('The data from user table: \n', rows);
  }).catch(err => {
    console.log(err);

  });

}

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = '%' + req.body.search + '%';
  knex('user')
    .whereILike('first_name', searchTerm)
    .orWhereILike('last_name', searchTerm)
    .orWhereILike('email', searchTerm)
    .orWhereILike('phone', searchTerm)
    .then(rows => {
      res.render('home', { rows });

      // console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });
}

exports.form = (req, res) => {
  res.render('add-user');
}

// Add new user
exports.create = (req, res) => {
  const { first_name, last_name, email, phone, comments, manager } = req.body;

  knex('user')
    .insert({ 'first_name': first_name, 'last_name': last_name, 'email': email, 'phone': phone, 'comments': comments, 'manager': manager })
    .then(rows => {
      res.render('add-user', { alert: 'User added successfully.' });

      // console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });

}


// Edit user
exports.edit = (req, res) => {
  knex('user')
    .where({ id: req.params.id })
    .then(rows => {
      res.render('edit-user', { rows });
      // console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });
}


// Update User
exports.update = (req, res) => {
  console.log('ARH');
  console.log(req.files);

  const { first_name, last_name, email, phone, comments, manager } = req.body;
  knex('user')
    .where({ id: req.params.id })
    .update({ first_name, last_name, email, phone, comments, manager })
    .then(rows => {
      fu.upload(req);
      res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
      // console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });
}

// Delete User
exports.userDelete = (req, res) => {

  // Delete a record
  knex('user')
    .where({ id: req.params.id })
    .del()
    .then(rows => {
      let removedUser = encodeURIComponent('User successeflly removed.');
      // res.redirect('/?removed=' + removedUser);
      // console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });

}

// View Users
exports.viewall = (req, res) => {
  knex('user')
    .where({ id: req.params.id })
    .then(rows => {
      res.render('view-user', { rows });
      // console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });
}

// Manager Auto Complete
exports.managerAutoComplete = (req, res) => {
  console.log(req.query.q)
  console.log('-----managerAutoComplete-----')
  let searchTerm = '%' + req.query.q + '%';
  
  let query = knex('user');
  if (req.query.q != undefined){
    console.log('search term is not undefined');
    console.log(searchTerm);
    query.whereILike('first_name', searchTerm)
    query.orWhereILike('last_name', searchTerm)
    query.orWhereILike('email', searchTerm)
    query.orWhereILike('phone', searchTerm)

  }

  query.then(rows => {
      let arr = [];

      rows.forEach(user => {
        // append new value to the array

        arr.push({ "id": user.first_name, "text": user.first_name });
      });

      res.json({ results: arr });
    }).catch(err => {
      console.log(err);

    });
}