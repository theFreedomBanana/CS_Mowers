let fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'newMowers');

let newFile;


fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
  if (!err) {
  	newFile = data.split('\n');

  	// Prevent from auto newline insertion
  	newFile[newFile.length - 1] == "" ? newFile.pop() : null;
  } else {
    console.log(err);
  }
});
