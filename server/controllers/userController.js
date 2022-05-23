const knex = require('../db/connection')


// View Users
exports.view = (req, res) => {
  knex('user')
    .where({ status: "active" })
    .then(rows => {
      let removedUser = req.query.removed;
      res.render('home', { rows, removedUser });

      console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });

}

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = '%' + req.body.search + '%';
  knex('user')
    .whereILike('first_name', searchTerm )
    .orWhereILike('last_name', searchTerm )
    .then(rows => {
      res.render('home', { rows });

      console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });
}

exports.form = (req, res) => {
  res.render('add-user');
}

// Add new user
exports.create = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;

  knex('user')
    .insert({ 'first_name': first_name, 'last_name': last_name, 'email': email, 'phone': phone, 'comments': comments })
    .then(rows => {
      res.render('add-user', { alert: 'User added successfully.' });

      console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });

}


// Edit user
exports.edit = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
    if (!err) {
      res.render('edit-user', { rows });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}


// Update User
exports.update = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  knex('user')
    .where({ id: req.params.id })
    .update({ first_name, last_name, email, phone, comments })
    .then(rows => {
      res.render('edit-user', { rows, alert: `${first_name} has been updated.` });

      console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });
}

// Delete User
exports.delete = (req, res) => {

  // Delete a record
  knex('user')
    .where({ id: req.params.id })
    .del()
    .then(rows => {
      let removedUser = encodeURIComponent('User successeflly removed.');
      res.redirect('/?removed=' + removedUser);
      console.log('The data from user table: \n', rows);
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
      console.log('The data from user table: \n', rows);
    }).catch(err => {
      console.log(err);

    });
}