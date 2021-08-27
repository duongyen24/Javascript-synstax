const path = require('path');

module.exports = {
	entry:'./src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/assets'), //this is what we want to serve to brownser 
		filename: 'bundle.js'
	}
}
