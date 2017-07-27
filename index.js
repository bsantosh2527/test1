const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config =  require('./config/database');

mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('culd not connect to database');
    }else{
        console.log('connected to database'+config.db);
    }

});

app.get('/', function(req, res){
  res.send('<h1>hello world</h1>');
});

app.listen(8000,() =>{
    console.log("Listening on port 8000");
}
);