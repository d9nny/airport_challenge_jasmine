describe("Airport", function() {

	var airport;
	var plane;

	beforeEach(function() {
		airport = new Airport();		
	});


	describe('#land', function() {
		it('instructs a plane to land', function () {
			airport.land(plane);
    	expect(plane.land).toHaveBeenCalled();
		});
	});	


	// 	it('raises an error when the airport is full', function () {
	// 		spyOn(airport,'isFull').and.returnValue(true);
	// 		expect(function(){ airport.land(plane); }).to.ThrowError('cannot land when the airport is full');
	// 	});
	// });

	describe('#take_off', function() {
		it('takes off a plane', function () {
			expect(airport.take_off).not.toBeUndefined();
		});
	});

});