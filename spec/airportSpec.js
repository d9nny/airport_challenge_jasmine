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
			expect(airport.land).not.toBeUndefined();
		});

		it('raises an error when the airport is full', function () {
			spyOn(airport,'isFull').and.returnValue(true);
			expect(function(){ airport.land(plane); }).to.ThrowError('cannot land when the airport is full');
		});
	});

	describe('#take_off', function() {
		it('takes off a plane', function () {
			expect(airport.take_off).not.toBeUndefined();
		});
	});

});