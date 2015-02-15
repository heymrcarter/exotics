var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CharacterSchema = new Schema({
	class: {
		type: String,
		required: true,
		trim: true,
		validate: [
			function (class) {
				var flag = false;

				if (class.toLowerCase() === 'warlock') {
					flag = true;
				} else if (class.toLowerCase() === 'titan') {
					flag = true;
				} else if (class.toLowerCase() === 'hunter') {
					flag = true;
				}

				return true;
			},
			'Class must be either Titan, Hunter, or Warlock'
		]
	},
	level: {
		type: Number,
		required: true,
		validate: [
			function (level) {
				return level && ((level > 0) && (level < 33));
			},
			'Level must be between 1 and 32'
		]
	}
});

mongoose.model('Character', CharacterSchema);