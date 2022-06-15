const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true})); // always we write in order to use bodyparser

app.get("/",function(req,res){
     //res.sendFile("index.html") //not good method
   /*instead of sendFile("specific file name") we use more batter method
      we can use console.log(__dirname);*/
     // console.log(__dirname);
      res.sendFile(__dirname + "/index.html");
});

// inside work, after entering in another webpage
app.post("/",function(req,res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
    //console.log(req.body.num1);
   // res.send("thanks for the post");
  });

  app.get("/bmicalculator",function(req,res){
     res.sendFile(__dirname + "/bmicalculator.html");
  });
  
  app.post("/bmicalculator",function(req,res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height*height);

    res.send("Your BMI is " + bmi);

  });


app.listen(3000,function(){        //most commonly used server num 3000 you can use another
    console.log("server is running on the port 3000.");
});






