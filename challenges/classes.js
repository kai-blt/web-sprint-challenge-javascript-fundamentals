// 1. Copy and paste your prototype in here and refactor into class syntax.

// Original Prototype version of CuboidMaker
// function CuboidMaker(attributes) {
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }
 
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;  
//   }
  
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));  
//   }
  
//   const cleverCube = new CuboidMaker({length: 4, width: 5, height: 5});


// Class refactor of CuboidMaker

class ClassCuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    
    volume() {
        return this.length * this.width * this.height;  
    }

    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

class CubeMaker extends ClassCuboidMaker {
    constructor(attributes) {
        super(attributes);
    }

    volume() {
        return Math.pow(this.length, 3);
    }

    surfaceArea() {
        return 6 * (this.length * this.width);
    }
}


const classCleverCube = new ClassCuboidMaker({length: 4, width: 5, height: 5});
const extendedCube = new CubeMaker({length: 10, width: 10, height: 10});



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(classCleverCube.volume()); // 100
console.log(classCleverCube.surfaceArea()); // 130
console.log(`Extended Cube volume: ${extendedCube.volume()}`); // 1000, 10 * 10 * 10
console.log(`Extended Cube surface area: ${extendedCube.surfaceArea()}`); // 600, 6 * (10 * 10)

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.