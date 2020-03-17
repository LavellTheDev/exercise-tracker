const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//How we create our express server
const app = express();
const port = process.env.PORT || 9000;

//middleware/parse json
app.use(cors());
app.use(express.json());

//database uri we get from dashboard
const uri = process.env.ATLAS_URI;
//pass in uri here v
mongoose.connect(uri, {
useUnifiedTopology: true,
useNewUrlParser: true,
useCreateIndex: true,
});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//what starts the server
app.listen(port, () =>{
  console.log(`Server is running on over ${port}`);
});
