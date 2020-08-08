//constructor used to create digital pal OBJECTS!
const DigitalPal = function () {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.houseQuality = 100;
};

//methods
DigitalPal.prototype.feed = function () {
  if (this.hungry) {
    console.log("That was yummy!");
    this.hungry = false;
    this.sleepy = true;
  }
  else {
    console.log("No thanks, I'm full.");
  }
};

//method to put asleep when sleepy,increase age by1 set to bored.

DigitalPal.prototype.sleep = fuction() {
  if * this.sleepy) {
    console.log("ZZZZzzzZZZZzzzz");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
  }
  else {
    console.log("No, I want to play!");
  }
};

//method to let user play when bored, set to hungry

DigitalPal.prototype.play = function () {
  if (this, bored) {
    console.log("yay, lets play");
    this, bored = false;
    this.hungry = true;
  }
  else {
    console.log("not right now, maybe later?");
  }
};

