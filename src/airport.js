function Airport() {
	this.hangar = [];
	this.capacity = 10;
};

Airport.prototype.isFull = function() {
	return this.hangar.length >= this.capacity
};

Airport.prototype.land = function(plane) {
	if (this.isFull()) { throw "Airport is full";}
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.isInAirport = function(plane) {
	matches = this.hangar.filter(function(p) {
		return (p === plane);
	});
	return (matches.length > 0);
};

Airport.prototype.takeOff = function(plane) {

};

