const express = require("express");
const app = express();
const fs = require('fs');

let path = '../src/data/data.txt';


app.put("/update", (req, res) => {

    const name = 'Name'
    const surname = "Surname"

    let buffer = new Buffer(surname + ' ' + name);
 
    fs.open(path, 'w', function(err, fd) {
        if (err) {
            throw 'could not open file: ' + err;
        }
    
        fs.write(fd, buffer, 0, buffer.length, null, function(err) {
            if (err) throw 'error writing file: ' + err;
            fs.close(fd, function() {
                console.log('wrote successfully');
            });
        });
    });

  });





app.use(express.json());




app.listen(3001, () => {
  console.log("server running on 3001");
});
