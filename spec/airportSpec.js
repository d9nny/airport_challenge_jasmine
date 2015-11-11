describe("Airport", function() {

	var airport;
	var plane;
	var capacity = 10;

	beforeEach(function() {
		airport = new Airport();
		plane = { land : function() {
			landed = true;
		},
		takeOff : function() {
			landed = true;
		}};
		spyOn(plane, 'land');
  	spyOn(plane, 'takeOff');
	});

	describe('#land', function() {
		it('expects to respond to', function () {
			expect(airport.land).not.toBeUndefined();
		});

		it('instructs a plane to land', function () {
			airport.land(plane);
    	expect(plane.land).toHaveBeenCalled();
		});

		it('pushes a plane to the airport array', function () {
			airport.land(plane);
    	expect(airport.isInAirport(plane)).toEqual(true);
		});
		it('raises an error when the airport is full', function() {
			for (var i = 0; i < capacity; i++) {
				airport.land(plane);
			}
			expect(function() {airport.land(plane);}).toThrow("Airport is full");
		});
  });	


	describe('#takeOff', function() {
		it('takes off a plane', function () {
			expect(airport.takeOff).not.toBeUndefined();
		});
	});

});