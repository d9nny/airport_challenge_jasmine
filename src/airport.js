function Airport() {
	this.hangar = [];
	this.capacity = 10;
	this.sunny = Symbol("sunny")
	this.stormy = Symbol("stormy")
	this.weatherConditions = [this.stormy, this.sunny, this.sunny];
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

Airport.prototype.weather = function(plane) {
	return this.weatherCondition[Math.round(Math.random()*2)];
};

Airport.prototype.isStormy = function(plane) {
	return this.weather() === this.stormy;
};

