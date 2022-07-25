// ==+==+==+==+==+==+==+==+==+==[Requirements]==+==+==+==+==+==+==+==+==+==
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/routes");
const mongoose = require("mongoose");
const app = express();
const multer = require('multer')

app.use(bodyParser.json());
app.use(multer().any());
app.use(bodyParser.urlencoded({extended : true}));

// ==+==+==+==+==+==+==+==+==+==[Connect DataBase]==+==+==+==+==+==+==+==+==+==
mongoose
  .connect(
    "mongodb+srv://sahilkushwaha:aasahil@cluster0.jluapfr.mongodb.net/group4Database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is Connected You are Ready To Goo buddy!"))
  .catch((err) => console.log(err.message));


app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Yuhoo! Express app is running on port " + (process.env.PORT || 3000));
});

// 