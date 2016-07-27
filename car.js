'use strict';

var Car = function (mpg) {

  this.milesPerGal = mpg;
  this.gallons = 0;
  this.odme = 0;
  this.tripThing = [];
};

Car.prototype.trips = function() {

  return this.tripThing;
};

Car.prototype.odometer = function() {

  return this.odme;
};

Car.prototype.drive = function (distance) {

  this.gallons -= (distance / this.milesPerGal);
  this.odme += distance;
  this.tripThing.push(distance + ' miles');
  return this.gallons;
};

Car.prototype.fill = function (gallons) {

  this.gallons += gallons;
  return gallons;
};

module.exports = Car;
