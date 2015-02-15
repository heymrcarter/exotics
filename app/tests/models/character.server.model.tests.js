var app = require('../../../server.js'),
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

	describe('Testing save method', function () {
		it('Should be able to save', function () {
			character.save(function (err) {
				should.not.exist(err);
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
			character.class = function () { return; };

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should allow characters to be saved with a level between 1 and 32', function () {
			character.level = '';

			character.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow characters to be saved with a level lower than 1', function () {
			character.level = 0;

			character.save(function (err) {
				should.exist(err)
			});
		});

		it('Should not allow characters to be saved with a level greater than 32', function () {
			character.level = 50;

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
});