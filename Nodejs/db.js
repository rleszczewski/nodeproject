const mongoose = require('mongoose');

// 
mongoose.connect('mongodb://localhost:27017/Users', (err) => {
	if(!err)
		console.log('Succes.');
	else
		console.log('Error:1 ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;