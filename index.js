const express = require('express');
const { resolve } = require('path');
require("dotenv").config();
const mongoose = require("mongoose")
// We initialize the Express app, define the port and enalbes JSON parsing for incoming request.


const app = express();
const port = 3010;
const MONGO_URI= process.env.MONGO_URI;

app.use(express.json());


mongoose
.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("Connected to database"))
.catch((err)=>console.error("Error connecting to database:", err));
//this connects our server to MONGODB Atlas. if the connection is successful, it logs


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  //This starts the Express server and listens on the specified port.
});