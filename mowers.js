let fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'newMowers');

let newFile;


let createLawn = (maxX, maxY) => {
	return {maxX: maxX, maxY: maxY};
}

let createMower = (x, y, orientation) => {
	return {x: x, y: y, orientation: orientation};
}

let changeMowerOrientation = (mower, val) => {
  const ORIENTATIONS = ['N', 'E', 'S', 'W'];
	let move = (val == 'L' ? -1 : 1);

	if ( ORIENTATIONS.indexOf(mower.orientation) + move < 0) {
		mower.orientation = 'W';
	}
	else if ( ORIENTATIONS.indexOf(mower.orientation) + move > ORIENTATIONS.length - 1) {
		mower.orientation = 'N';
	}
	else {
		mower.orientation = ORIENTATIONS[ORIENTATIONS.indexOf(mower.orientation) + move];
	}

	return mower;
}

let moveMower = (mower, lawn) => {
	switch (mower.orientation) {
		case 'N':
			mower.y < (lawn.maxY) ? mower.y += 1 : null;
			break;
		case 'E':
			mower.x < (lawn.maxX) ? mower.x += 1 : null;
			break;
		case 'S':
			mower.y > 0 ? mower.y -= 1 : null;
			break;
		case 'W':
			mower.x > 0 ? mower.x -= 1 : null;
			break;
	}

	return mower;
}

let instructMower = (mower, lawn, instructions) => {
	instructions.forEach( i => {
		if ( ['L', 'R'].includes(i) ) {
			mower = changeMowerOrientation(mower, i);
		}
		else if (i == 'F') {
			mower = moveMower(mower, lawn);
		}
	})

	return `${mower.x} ${mower.y} ${mower.orientation}`;
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
