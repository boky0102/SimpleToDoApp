const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine","ejs");


app.get("/", (req,res) => {


  var today = new Date;
  var currentDay = today.getDay();
  var kindofday="";

  if(currentDay == 0 || currentDay == 6){
    kindofday="Weekend";
  }

  else{
    kindofday="Weekday";
  }
  res.render('list',{day:kindofday});

  console.log(currentDay);
})




app.listen(3000, () => {
  console.log("Server is runing at port 3000");
})
