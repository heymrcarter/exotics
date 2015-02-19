var app = require('../../server.js'),
	should = require('should'),
	mongoose = require('mongoose'),
	Item = mongoose.model('Item');

var item;

describe('Item model unit tests', function () {
	beforeEach(function (done) {
		item = new Item({
			name: 'Item name',
			description: 'Item description',
			type: 'Weapon'
		});

		item.save(function () {
			done();
		});
	});

	describe('Testing required properties', function () {
		it('Should have a name property', function () {
			item.should.have.property('name', item.name);
		});

		it('Should have a description property', function () {
			item.should.have.property('description', item.description);
		});

		it('Should have a type property', function () {
			item.should.have.property('type', item.type);
		});
	});

	describe('Testing name property', function () {
		it('Should allow the name to be any string', function () {
			item.name = 'any string';

			item.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Must have a name', function () {
			item.name = '';

			item.save(function (err) {
				should.exist(err);
			});
		});

		/*it('Should not allow names to be numbers', function () {
			item.name = 3;

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow names to be objects', function () {
			item.name = {};

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow names to be arrays', function () {
			item.name = [];

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow names to be boolean values', function () {
			item.name = false;

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow names to be a function', function () {
			item.name = function () { return; };

			item.save(function (err) {
				should.exist(err);
			});
		});*/
	});

	describe('Testing description property', function () {
		it('Should allow the description to be any string', function () {
			item.name = 'any string';

			item.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Must have a description', function () {
			item.description = '';

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow descriptions to be a number', function () {
			item.description = 9;

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow descriptions to be objects', function () {
			item.description = {};

			item.save(function () {
				should.exist(err);
			});
		});

		it('Should not allow descriptions to be arrays', function () {
			item.description = [];

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow descriptions to be boolean values', function () {
			item.descriptions = true;

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow descriptions to be functions', function () {
			item.description = function () { return; };

			item.save(function (err) {
				should.exist(err);
			});
		});
	});

	describe('Testing type property', function () {
		it('Should allow type to be "Weapon"', function () {
			item.type = 'Weapon';

			item.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should allow type to be "Armor"', function () {
			item.type = 'Armor';

			item.save(function (err) {
				should.not.exist(err);
			});
		});

		it('Should not allow type to be any other string', function () {
			item.type = 'any other string';

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Must have a type', function () {
			item.type = '';

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow types to be numbers', function () {
			item.type = 3;

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow types to be objects', function () {
			item.type = {};

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow types to be arrays', function () {
			item.type = [];

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow types to be boolean values', function () {
			item.type = false;

			item.save(function (err) {
				should.exist(err);
			});
		});

		it('Should not allow types to be functions', function () {
			item.type = function () { return; };

			item.save(function (err) {
				should.exist(err);
			});
		});
	});

	afterEach(function (done) {
		item.remove(function () {
			done();
		});
	});
});
