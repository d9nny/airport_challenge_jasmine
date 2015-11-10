function Airport() {

};

Airport.prototype.planes = function() {
	return [];
};

Airport.prototype.land = function(plane) {
	if(this.isFull()) {
  	throw new Error('cannot land when the airport is full');
  }
};

Airport.prototype.take_off = function(plane) {

};

Airport.prototype.isFull = function() {
	return true;
};