var express = require("express");
var app  = express();

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

app.get("/", function(req, res){
    res.render("template")
});

app.listen(8080, function(){
    console.log("Server connected")
});
