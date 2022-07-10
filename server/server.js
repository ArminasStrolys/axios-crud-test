const express = require("express");
const app = express();
const fs = require('fs');

let path = '../../src/data/data.txt';

app.use(express.json());




app.listen(3001, () => {
  console.log("server running on 3001");
});
