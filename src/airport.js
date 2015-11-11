function Airport() {
	this.hangar = []
};

Airport.prototype.land = function(plane) {
	// if(this.isFull()) {
  //  	throw new Error('cannot land when the airport is full');
  //  }
  plane.land();
};

Airport.prototype.take_off = function(plane) {

};

Airport.prototype.isFull = function() {
	// if (this.hangar >= 50) {
	// 	return true;
	// }
		return false;
};