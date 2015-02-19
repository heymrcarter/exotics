var app = require('../../server.js'),
	should = require('should'),
	mongoose = require('mongoose'),
	Character = mongoose.model('Character');

var character;

describe('Character Model unit tests:', function () {
	beforeEach(function (done) {
		character = new Character({
			class: 'Warlock',
			level: 30
		});

		character.save(function () {
			done();
		});
	});

	describe('Testing required fields', function () {
		it('Should have a class property', function () {
			character.should.have.property('class', character.class);
		});

		it('Should have a level property', function () {
			character.should.have.property('level', character.level);
		});
	});

	describe('Testing Character level', function () {
		it('Should allow a Character level between 1 and 32', function () {
			character.level = 14;

			character.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should allow a Character level of 1', function () {
			character.level = 1;

			character.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should allow a Character level of 32', function () {
			character.level = 32;

			character.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should not allow a Character level below 1', function () {
			character.level = 0;

			character.save(function (err) {
				should.exist(err);
			});
		});	

		it('Should not allow a Character level above 32', function () {
			character.level = 40;

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character level to be a string', function () {
			character.level = 'blah';

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character level to be an object', function () {
			character.level = {};

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character level to be a boolean value', function () {
			character.level = true;

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character level to be a function', function () {
			character.level = function () { return; };

			character.save(function (err) {
				should.exist(err);
			});
		});
	});

	describe('Testing Character class', function () {
		it('Should allow a Character class of "Hunter"', function () {
			character.class = 'Hunter';

			character.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should allow a Character class of "Warlock"', function () {
			character.class = 'Warlock';

			character.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should allow a Character class of "Titan"', function () {
			character.class = 'Titan';

			character.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should not allow a Character class of anything other than Warlock, Hunter, or Titan', function () {
			character.class = 'blah';

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow characters to be saved without a class', function () {
			character.class = '';

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character class to be a number', function () {
			character.class = 3;

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character class to be an object', function () {
			character.class = {};

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character class to be a boolean value', function () {
			character.class = false;

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow character class to be a function', function () {
			character.class = new Function();

			character.save(function (err) {
				should.exist(err);
			});
		});
	});

	afterEach(function (done) {
		character.remove(function () {
			done();
		});
	});
});