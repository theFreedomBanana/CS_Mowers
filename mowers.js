let fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'newMowers');

let newFile;


let createLawn = (maxX, maxY) => {
	return {maxX: maxX, maxY: maxY};
}

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
  if (!err) {
  	newFile = data.split('\n');

  	// Prevent from auto newline insertion
  	newFile[newFile.length - 1] == "" ? newFile.pop() : null;

  	let lawnPos = newFile.shift().split(' ');
  	let lawn = createLawn(parseInt(lawnPos[0]), parseInt(lawnPos[1]));
  } else {
    console.log(err);
  }
});
