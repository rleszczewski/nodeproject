const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {User} = require('../models/user');


// => localhost:3000/users/
router.get('/', (req, res) =>{
	User.find((err, docs) => {
		if(!err) {res.send(docs); }
		else {console.log('Error: 2' + JSON.stringify(err, undefined, 2));}
	});
});
	
	router.get('/:id', (req, res) =>{
		if(!ObjectId.isValid(req.params.id))
			return res.status(400).send(`no record with given id : ${req.params.id}`);
		
		User.findById(req.params.id, (err,doc) => {
			if(!err) {res.send(doc); }
			else {console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2));}
		});
	});
router.put('/:id' , (req, res) => {
	if(!ObjectId.isValid(req.params.id))
			return res.status(400).send(`no record with given id : ${req.params.id}`);
		var emp = new User({
		firstname: req.body.firstname,
		surname: req.body.surname,
		email: req.body.email,
		password: req.body.password
	});
	User.findByIdAndUpdate(req.params.id, {$set: emp},{new: true}, (err, doc) =>
		{
			if (!err) {res.send(doc); }
			else {console.log('Error in  User Save :' + JSON.stringify(err, undefined, 2));}
		}
	);
});	
	
router.delete('/:id' , (req, res) => {
	if(!ObjectId.isValid(req.params.id))
	return res.status(400).send(`no record with given id : ${req.params.id}`);
	User.findByIdAndRemove(req.params.id, (err, doc) =>
		{
			if (!err) {res.send(doc); }
			else {console.log('Error in  User Delete :' + JSON.stringify(err, undefined, 2));}
		}
	);
	
	
});



router.post('/', (req, res) =>{
	var emp = new User({
		firstname: req.body.firstname,
		surname: req.body.surname,
		email: req.body.email,
		password: req.body.password
	});
	emp.save((err, doc) => {
		if(!err) {res.send(doc); }
		else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
	});
});

module.exports = router;