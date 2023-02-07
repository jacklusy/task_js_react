class Car {
    constructor(make,model,year,min,max){
        this.make=make,
        this.model=model,
        this.year=year,
        this.cost=this.carCost(min,max)
    }

    carCost(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getDescription(){
        return `A ${this.year} made ${this.make} in ${this.model} and the cost is ${this.cost}`;
    }
}

const car1 = new Car("Volkswagen" , "Audi" , 2020 , 20000, 50000);
console.log(car1.getDescription());

class Person {
    constructor (firstName,lastName,age){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age
    }

    getGreeting(){
        return `Hi I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`
    }
}


const person1 = new Person("Jack" , "Al-loussi" , 19 );
console.log(person1.getGreeting());

///////////////////////////////////////////////////

//  function counterFunc(counter) {
//   if (counter > 100) {
//     counter = 0;
//   }else {
//     counter++;
//   }
  
//   return counter;
// }

// function nameAge(name, age) {
//   console.log("Hello " + name);
//   console.log("You are " + age + " years old");
// }

// const counterFunc = counter => (counter > 100 ? 0 : counter + 1);
// console.log(counterFunc(50)); 

counterFunc = counter => counter > 100 ? console.log(counter = 0) : console.log(counter + 1); 

counterFunc(11);

const nameAge = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};
nameAge('jack',19); 


///////////////////////////////////////////////////

// function createFullName(firstName, lastName) {
//     return firstName + " " + lastName;
//   }

  const createFullName = (firstName , lastName) => firstName + " " + lastName;
  
  
//   function doubleNumber(number) {
//     return number * 2;
//   }

  const doubleNumber = (number) =>  number * 2;
  
//   function getEvenNumbers(array) {
//     let evenNumbers = [];
//     for (let i of array) {
//       if (i % 2 === 0) {
//         evenNumbers.push(i);
//       }
//     }
//     return evenNumbers;
//   }

  const getEvenNumbers = (array) => {
    let evenNumbers = [];
    for (let i of array) {
        (i % 2 === 0) ? evenNumbers.push(i) : null ;
        
      }
      return evenNumbers;
  }

    
  if (1<2){ 
    for (let index = 0; index < 5; index++) 
    {
     console.log("hi");
     }
     } else{ 
    console.log("bye"); 
    }


    const func2 = () => (1<2)? (() => {
        for (let index = 0; index < 5; index++) 
        {
         console.log("hi");
         }
    }) ():console.log("bye"); 

    func2();


    ////////////////////////////////////////////////////////////

    

        var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
    ];

    // Using the varabile persons
    // Create a function called avgAge
    // that accept an array
    // and return average age of this array

    // Ex: avgAge(persons) => 41.2



    function avarAge(array){
        let age = array.reduce((acc , cur)=>{
            return acc + cur.age ;
        },0)
        return age/array.length ;
    }

    console.log(avarAge(persons)); 