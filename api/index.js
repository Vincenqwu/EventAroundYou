const express = require("express");
// const https = require("https");
const CORS = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const eventRoute = require("./routes/eventRoute");
const userRoute = require("./routes/userRoute");

dotenv.config();

console.log(process.env.MONGODB_URL);
mongoose.connect(
  process.env.MONGODB_URL || '',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

const app = express();
app.use(CORS());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.use('/user/', userRoute);
//app.use('/event/', eventRoute);

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(process.env.PORT || 8081, () => {
  console.log('App listening on port 8081!');
});