const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine","ejs");


app.get("/", (req,res) => {


  var today = new Date;
  var currentDay = today.getDay();
  var kindofday="";

  switch (currentDay){

    case 0:
      kindofday="Sunday";
      break;

    case 1:
      kindofday="Monday";
      break;


    case 2:
      kindofday="Tuesday";
      break;

    case 3:
      kindofday="Wensday";
      break;

    case 4:
      kindofday="Thursday";
      break;

    case 5:
      kindofday="Friday";
      break;

    case 6:
      kindofday="Saturday";
      break;
      }

  res.render('list',{day:kindofday});

  console.log(currentDay);
});




app.listen(3000, () => {
  console.log("Server is runing at port 3000");
})
