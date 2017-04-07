var express = require('express')
var app = express();
var path = require('path');
var session = require('express-session');
app.use(express.static(path.join(__dirname, '..')));
app.use(session({
    secret: 'angular_tutorial',
    resave: true,
    saveUninitialized: true
}));
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var notes_init = [
    {text: "First note"},
    {text: "Secwefwond note"},
    {text: "Thiewfwerd note"}
];
app.get("/notes", function(req,res) {
    console.log("reading notes", req.session.notes);
    if (!req.session.notes) {
        req.session.notes = notes_init;
    }
    res.send(req.session.notes);
});
app.post("/notes", function(req,res) {
    var note = req.body;
    console.log("adding note", req.session.notes);
    req.session.notes.push(note);
    res.end();
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
  