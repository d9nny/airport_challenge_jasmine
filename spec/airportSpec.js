describe("Airport", function() {

	var airport;

	beforeEach(function() {
		airport = new Airport();		
	});

	describe('#initialization', function() {
		it('has no planes by default', function() {
			expect(airport.planes()).toEqual([]);
		});
	});

	describe('#land', function() {
		it('lands a plane', function () {
			expect(airport.land).not.toBeUndefined()
		});
	});

	describe('#take_off', function() {
		it('takes off a plane', function () {
			expect(airport.take_off).not.toBeUndefined()
		});
	});
});