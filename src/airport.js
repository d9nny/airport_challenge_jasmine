function Airport() {
	this.hangar = []
};

Airport.prototype.land = function(plane) {
	// if(this.isFull()) {
  //  	throw new Error('cannot land when the airport is full');
  //  }
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

Airport.prototype.isFull = function() {
	// if (this.hangar >= 50) {
	// 	return true;
	// }
		return false;
};