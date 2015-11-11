descibe("Plane", function () {
  console.log('loaded')
	var plane;

	beforeEach(function() {
		plane = new Plane();
	)};

	it("should be able to land a plane", function() {
    plane.land();
    expect(plane.hasLanded()).toEqual(true);
  });

  it("should be able to take off a plane", function() {
    plane.takeOff();
    expect(plane.hasLanded()).toEqual(false);
  });

  it("returns the state of the plane", function() {
    expect(plane.hasLanded()).toEqual(false);
  });

)};