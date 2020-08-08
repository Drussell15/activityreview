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
  if (this.sleepy) {
    console.log("ZZZZzzzZZZZzzzz");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
  } else {
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
// add destroy furnature method

DigitalPal.prototype.destroyfurnature = function () {
  if (this.houseQuality - 10 > 0) {
    this.houseQuality -= 10;
    this.bored = false;
    this.sleepy = true;
    console.log("destroy all the furnature!");
  }
  else {
    console.log("Ive destroyed everything!!");
  }
};
// adds the "buyNewFurniture" method to the prototype which increases the "animals.cat.houseQuality" value by fifty
DigitalPal.prototype.buyNewFurniture = function () {
  this.houseQuality += 50;
  console.log("Are you sure that's a good idea?");
};

// method which is called in "this.sleep" to increase the age of the digitalpal by one
DigitalPal.prototype.increaseAge = function () {
  this.age++;
  console.log("Happy Birthday to me! I am " + this.age + " old!");
};

// adds the method "letoutside" to the prototype which lets "dog" outside when it is outside
DigitalPal.prototype.letOutside = function () {
  if (!this.outside) {
    console.log("Yay! I love the outdoors!");
    this.outside = true;
    this.bark();
  }
  else {
    console.log("We're already outside though...");
  }
};

// adds the method "letInside" to the prototype which lets our DigitalPal inside when it is outside
DigitalPal.prototype.letInside = function () {
  if (this.outside) {
    console.log("Aww... Do I have to?");
    this.outside = false;
  }
  else {
    console.log("We're already inside though...");
  }
};

// adds the method "bark" to the prototype which lets our digitalpal bark
DigitalPal.prototype.bark = function () {
  console.log("Woof! Woof!");
};

// adds the "meow" method to the prototype which lets our pet meow.
DigitalPal.prototype.meow = function () {
  console.log("Meow! Meow!");
};

// Create a new animals object to contain our new Digital Pals
const animals = {};

// creates a new DigitalPal object with the name "dog"
animals.dog = new DigitalPal();

// creates a new DigitalPal object with the name "cat"
animals.cat = new DigitalPal();

// Grabbing command line arguments for animal and method
const animal = process.argv[2];
const method = process.argv[3];

// try calling your chosen animal and method from the terminal example: 'node tamagotchi cat meow'
animals[animal][method]();


