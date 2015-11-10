describe("Airport", function() {

	var airport;

	beforeEach(function() {
		airport = new Airport();

	});

	describe('#land', function() {
		it('lands a plane', function () {
			spyOn(airport, 'land')
		});
	});

});