describe("Plane", function () {
  console.log('loaded')
	var plane;

	beforeEach(function() {
		plane = new Plane();
	});

	it("should be able to land a plane", function() {
    plane.land();
    expect(plane.hasLanded()).toEqual(true);
  });

  it("should be able to take off a plane", function() {
    plane.land();
    plane.takeOff();
    expect(plane.hasLanded()).toEqual(false);
  });

  it('should not be able to take off if its flying', function(){
    expect(function(){plane.takeOff();}).toThrow("Can't take off, currently flying");
  });

  it("returns the state of the plane", function() {
    expect(plane.hasLanded()).toEqual(false);
  });

});