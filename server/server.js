var c = console;
var root = __dirname + '/..'
var express = require('express')
var app = express();
var path = require('path');
var session = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);
app.use(express.static(root));
app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost:27017/angular_session'
    }),
    secret: 'angular_tutorial',
    resave: true,
    saveUninitialized: true
}));
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var fs = require('fs');

var Db = require('mongodb').Db;
var ObjectID = require('mongodb').ObjectID;
var Server = require('mongodb').Server;
var db = new Db('tutor',
    new Server("localhost", 27017, {safe: true},
        {auto_reconnect: true}, {}));
db.open(function(){
    console.log("mongo db is opened!");
    db.collection('notes', function(error, notes) {
        db.notes = notes;
    });
    db.collection('sections', function(error, sections) {
        db.sections = sections;
    });
    db.collection('users', function(error, users) {
        db.users = users;
    });
});



var notes_init = [
    {text: "First note"},
    {text: "Secwefwond note"},
    {text: "Thiewfwerd note"}
];
app.get("/notes", function(req,res) {
    db.notes.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});
app.post("/notes", function(req,res) {
    var note = req.body;
    note.date = new Date();
c.log(note);
    db.notes.insert(note);
    res.end();
});
app.delete("/notes", function(req,res) {
    var id = new ObjectID(req.query.id);
    db.notes.remove({_id: id}, function(err){
        if (err) {
            console.log(err);
            res.send("Failed");
        } else {
            res.send("Success");
        }
    })
});


app.post("/sections/replace", function(req,resp) {
    // do not clear the list
    if (req.body.length==0) {
        resp.end();
    }
    db.sections.remove({}, function(err, res) {
        if (err) console.log(err);
c.log(req.body)
        db.sections.insert(req.body, function(err, res) {
            if (err) console.log("err after insert",err);
            resp.end();
        });
    });
});

app.get("/sections", function(req,res) {
    db.sections.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});


app.get("/checkUserUnique", function(req,res) {
    if (req.query.user){
        db.users.find({name:req.query.user}).toArray(function(err, items){
            res.send(!items.length);
        });
    }else{
        res.send(false);
    }
});

app.post("/users", function(req,res) {
    db.users.insert(req.body, function(resp) {
        req.session.userName = req.body.userName;
        res.end();
    });
});


app.listen(3000, function(){
    console.log('server listen on port 3000')
});

app.get('*', function (req, res, next) {
   res.sendFile('index.html', {root:root});
});