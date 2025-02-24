// Question 1. Filter unique array members using Set.

let myarr=[1,2,1,4,1,5,6]
console.log("Original Array: " + myarr)
let myset= new Set(myarr);
let newarr=[...myset]
console.log("New Unique Array: "+ newarr)

// Question 2. Filter anagrams using Map.

function filteranagrams(words){
    let anagrammap=new Map();
    for(let i=0;i<words.length;i++){
        let word=words[i]; 
        let sortedword = word.split('').sort().join('');  
        if(anagrammap.has(sortedword)){
            anagrammap.get(sortedword).push(word);
        }else{
            anagrammap.set(sortedword,[word]);
        }
    }
    return Array.from(anagrammap.values());
}
let words = ['brag', 'tan', 'ate', 'nat', 'bat', 'grab'];
console.log("List of Words: ");
console.log(words);
let groupanagrams= filteranagrams(words);
console.log("\nFiltered Anagrams: ");
console.log(groupanagrams)

//Question 3. Write a program to implement inheritance upto 3 classes.The Class must contain private and public variables and static functions.

class Animal{
    #name;
    age;
    constructor(name, age){
        this.#name=name; 
        this.age=age;   
    }
    static description(){
        console.log("Animals are living organisms that move and breathe.");
    }
    getName(){
        return this.#name;
    }
    speak(){
        console.log("Animal sound!");
    }
}

class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age); 
        this.breed=breed; 
    }
    speak(){
        console.log("Woof woof!");
    }
    getBreed(){
        return this.breed;
    }
}

class Bulldog extends Dog{
    constructor(name,age,breed,color){
        super(name,age,breed); 
        this.color=color; 
    }
    speak(){
        console.log("Bulldog growl!");
    }
    getColor(){
        return this.color;
    }
}

let myBulldog=new Bulldog("Tommy",1,"Bulldog","Brown");
console.log("Name: "+myBulldog.getName());
console.log("Age: "+myBulldog.age);
console.log("Breed: "+myBulldog.getBreed());
console.log("Color: "+myBulldog.getColor());
myBulldog.speak();
Animal.description();

// Question 4. Write a program to implement a class having static functions

class calculator{
    static add(a, b){
        return a + b;
    }
    static subtract(a, b){
        return a - b;
    }
}
let sum=calculator.add(10,5);
let difference=calculator.subtract(10,5);
console.log("Sum: "+sum);          
console.log("Difference: "+difference);

// Question 5. Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

//=== geometry.js - file for exporting

const PI = 3.14159;
function areaOfCircle(radius) {
    return PI*radius*radius;
}
function areaOfRectangle(length,width) {
    return length*width;
}
function areaOfCylinder(radius,height) {
    return 2*PI*radius*(radius+height);
}
module.exports={
    PI,
    areaOfCircle,
    areaOfRectangle,
    areaOfCylinder
};

//=== app.js - file for importing

const geometry = require('./geometry');
const circleArea = geometry.areaOfCircle(5); 
const rectangleArea = geometry.areaOfRectangle(4, 6); 
const cylinderArea = geometry.areaOfCylinder(3, 7); 

console.log("Area of Circle: " + circleArea);         
console.log("Area of Rectangle: " + rectangleArea);   
console.log("Area of Cylinder: " + cylinderArea);     


// Question 6. Import a module for filtering unique elements in an array.

//=== utils.js - file for exporting

function getUniqueElements(arr) {
    return [...new Set(arr)];
}
module.exports = {
    getUniqueElements
};

//=== app.js - file for importing

const utils = require('./utils');
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 6];
const uniqueArray = utils.getUniqueElements(arrayWithDuplicates);
console.log("Unique Elements: ", uniqueArray); 


// Question 7. Write a program to flatten a nested array to single level using arrow functions.

const flattenArray = (arr) => {
    const result=[];
    for (let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...flattenArray(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
};
const nestedArray=[1, [2, [3, 4], 5], [6, 7], 8];
console.log("Original Array is: ")
console.log(nestedArray)
const flattenedArray=flattenArray(nestedArray);
console.log("\nUpdated Array is: ")
console.log(flattenedArray); 
