const express = require('express');
const app = express();
const port = process.env.port || 4000;

//ejs setting start
app.set('views', __dirname + '/Component');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//ejs setting end

app.get('/', function(req,res){
    res.render('index.html');
});

app.get('/*',function(req,res){
    res.render('error.html');
})
app.listen(port, function(){
    console.log(`server is running on ${port}`);
});