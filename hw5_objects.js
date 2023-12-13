//1. створити 3 обʼєкти через {}let cat = ne Object();

const { log } = require("console");

let tiger = {
    family: 'Cats',
    size: 'Big'
};

let pencil = {
    colour: "Red",
    size: 'Big'

}

let parot = {
    age: '5',
    breed: 'kakadu'

}

//2. створити 3 обʼєкти через Object()

let year = new Object();
year.firstMonth = "January";
year.lastMonth = "December";
year.count = "12"

let vampire = new Object();
vampire.first = "Vlad";
vampire.age = "Immortal";

let bird = new Object();
bird.colour = "Brown";
bird.wings = "2";

//3створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі

let bigcats = {
    bites: true, 
};
let jaguar = {
    roar: true,
};

jaguar.__proto__ = bigcats; 

console.log(jaguar.bites);
console.log(jaguar.roar);


//4створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

let engineer = {
    age: 30,
};

let qa_engineer = {
    name: "Fred",
}

qa_engineer.__proto__ = engineer 
console.log(qa_engineer.age);
console.log(qa_engineer.name);

//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let person = {
    colour: "red",
}

engineer.__proto__ = person

console.log(person.colour);
console.log(qa_engineer.age);
console.log(qa_engineer.name);