var express = require('express')
var app = express();
var path = require('path');
var session = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);
app.use(express.static(path.join(__dirname, '..')));
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
var Server = require('mongodb').Server;
var db = new Db('tutor',
    new Server("localhost", 27017, {safe: true},
        {auto_reconnect: true}, {}));
db.open(function(){
    console.log("mongo db is opened!");
    db.collection('notes', function(error, notes) {
        db.notes = notes;
    });
});



var notes_init = [
    {text: "First note"},
    {text: "Secwefwond note"},
    {text: "Thiewfwerd note"}
];
app.get("/notes", function(req,res) {
    fs.readFile("notes.json", function(err, result) {
        if (result) {
            result = ""+result; // convert Object to String
            //remove last \n in file
            result = result.substring(0, result.length - 1);
            result = "["+result+"]";
            result = result.split("\n").join(",");
            res.send(result);
        } else {
            res.end();
        }
    });
});
app.post("/notes", function(req,res) {
    var note = req.body;
    var noteText = JSON.stringify(note)+"\n";
    console.log(noteText)
    fs.appendFile("notes.json", noteText, function(err) {
        if (err) console.log("something is wrong");
        // res.send(notes_init);
        res.end();
    });
});


app.listen(8080, function(){
    console.log('server listen on port 8080')
});

/*

FOLDER STRUCTURE:

root
  app 
  server
     server.js
	 package.json
  index.html
  package.json
  
*/
  