var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ItemSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		required: true,
		trim: true
	},
	type: {
		type: String,
		required: true,
		trim: true
	},
	owned: {
		type: Boolean,
		required: true
	}
});

mongoose.model('Item', ItemSchema);