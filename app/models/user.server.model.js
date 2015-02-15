var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		trim: true
	},
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		validate: [
			function (password) {
				return password.length >= 6;
			},
			'Password must be at least 6 characters long'
		]
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: true;
	},
	providerId: String,
	providerData: {},
	created: {
		type: Date,
		default: Date.now
	}
});

UserSchema.pre('save', function (next) {
	if (this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'best64');
		this.password = this.hashPassword(this.password);
	}

	next();
});

UserSchema.methods.hashPassword = function (password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function (password) {
	return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function (username, suffix, callback) {
	var _this = this,
		possibleUsername = username + (suffix || '');

	_this.findOne({
		username: possibleUsername
	}, function (err, user) {
		if (!err) {
			if (!user) {
				callback(possibleUsername);
			}

			return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
		}

		callback(null);
	});
};

UserSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', UserSchema);