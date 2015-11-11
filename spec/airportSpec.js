describe("Airport", function() {

	var airport;
	var plane;
	var capacity = 10;

	beforeEach(function() {
		airport = new Airport(capacity);
		plane = { land : function() {
			landed = true;
		},
		takeOff : function() {
			landed = false;
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

		it('allows a plane to take off', function() {
			spyOn(Math, 'random').and.returnValue(0.9);
			airport.land(plane)
			airport.takeOff(plane)
			expect(airport.isInAirport(plane)).toEqual(false)
		});

		it('prevents a plane taking off when its stormy', function() {
			spyOn(Math, 'random').and.returnValue(0.1);
			airport.land(plane)
			expect(function() {airport.takeOff(plane);}).toThrow("Too stormy to take off");
		});

		it('refuses to take off planes that are not at the airport', function() {  
			spyOn(Math, 'random').and.returnValue(0.9);
			expect(function() {airport.takeOff(plane);}).toThrow("The plane did not land on this airport");
		});
	});

	describe('#weather', function() {
		it('tell us how is the weather', function () {
			expect(airport.weather).toBeTruthy; //toBeTruthy= whether or not is nil
		});
	});

	describe('#isStormy', function() {
		it("Should tell us when the weather is stormy", function() {
		  spyOn(Math, 'random').and.returnValue(0.1);
		  expect(airport.isStormy()).toBe(true);
	  });
	});

});