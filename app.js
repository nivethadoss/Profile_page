var express = require("express");
var app  = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.render("home")
});

app.get("/example", function(req, res){
    res.render("example")
})

app.listen(8080, function(){
    console.log("Server connected")
});