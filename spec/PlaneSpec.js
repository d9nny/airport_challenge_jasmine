descibe("Plane", function () {

	var plane;

	beforeEach(function() {
		plane = new Plane();
	)};

	it("should be able to land a plane", function() {
    plane.land();
    expect(plane.land()).toEqual(false);
  });

)};