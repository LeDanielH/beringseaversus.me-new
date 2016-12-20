var MongoClient = require("mongodb").MongoClient;
var username = process.env.MONGO_USER;
var password = process.env.MONGO_PW;
var url = 'mongodb://${username}:${password}@ds139438.mlab.com:39438/beringseaversus-me';

var logRequest = function(greeting, timestamp) {
	db.collection('visits').insertOne({
		greeting: greeting,
		timestamp: timestamp
	});
};
