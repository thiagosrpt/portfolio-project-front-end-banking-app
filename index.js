var express = require('express');
var app     = express();
var cors    = require('cors');
var dal    = require('./dal');

app.use(express.static('public'));
app.use(cors());


//create account
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name,req.params.email,req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});


//  delete by email
app.get('/account/delete/:email', function (req, res) {

    dal.deleteByEmail().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

app.get('/accounts/delete', function (req, res) {

    dal.deleteAll().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

// get all accounts
app.get('/accounts/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

app.get('/account/update/:email/:balance', function (req, res) {
    dal.update(req.params.email, req.params.balance)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
});


app.listen(3000);
console.log('Running on port: 3000')