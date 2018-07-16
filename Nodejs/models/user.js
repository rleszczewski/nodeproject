const mongoose = require('mongoose');
// email validation function
//var validateEmail = function(email) {
   // var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   // return re.test(email)
//};


var User = mongoose.model('User', {
	firstname: {type: String },
	surname: {type: String },
	email: {type: String },
	// {
        // type: String,
        // trim: true,
        // lowercase: true,
        // unique: true,
        // required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	// },
    	password: {type: String }
		
});

module.exports = {User};