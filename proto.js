//inheritance and prototypes.............................................................
// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
let animal = {
    eats: true,
    walk: function () {
        console.log('I walk')
    }
}
let rabbit = {
    jumps: true,
    carrot: 'yes'
}
rabbit.__proto__ = animal 
console.log(rabbit.eats)
    
// Write code to explain prototype chaining
const F = function () {
    this.a = 1;
    this.b = 2;
};
const o = new F();
F.prototype.c = 4;
console.log(o.a); //1
console.log(o.c); // 4

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
const array = {
    arr : [] ,
    m: function() {
        let sum=0;
        for (let i = 0; i < this.arr.length ;i++) {
            sum+=arr[i];
        }
        return this.sum;
    }
};
const p = Object.create(array);
p.arr =[1,2,3]; 
console.log(p.m());
const q = Object.create(array);
q.arr =[11,55,77,53,3]; 
console.log(q.m());

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let anim = {
    eats: true,
    moves: true,
    walk: function () {
        console.log('I walk')
    }
}

let rabbit = {
    jumps: true,
    carrot: 'yes'
}

let mouse = {
    hasTail: true,
}

rabbit.__proto__ = anim //rabbit inherits anim object
mouse.__proto__ = anim //mouse inherits anim object
console.log(rabbit.moves) // inherited property
console.log(rabbit.jumps)// own property
console.log(rabbit.hasOwnProperty('moves')) // false
console.log(rabbit.hasOwnProperty('jumps')) // true
