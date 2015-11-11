function Plane() {
	this.landed = false;
};

Plane.prototype.hasLanded = function() {
	return this.landed;
};

Plane.prototype.land = function() {
	this.landed = true;
};

Plane.prototype.takeOff = function() {
	if (this.hasLanded() === false) {throw "Can't take off, currently flying";}
	this.landed = false;
};

