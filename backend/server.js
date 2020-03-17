const express = require('express');
const cors = require('cors');

require('dotenv').config();

//How we create our express server
const app = express();
const port = process.env.PORT || 9000;

//middleware/parse json
app.use(cors());
app.use(express.json());

//what starts the server
app.listen(port, () =>{
  console.log(`Server is running on over ${port}`);
});
