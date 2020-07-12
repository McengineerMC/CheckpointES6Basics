let pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];


const getAge = (pet) => { pet.age = new Date().getFullYear() - pet.bornOn;
return pet;}


let petsWithAge = pets.map(getAge);
console.log(petsWithAge);

let dogs = pets.filter(pet => pet.type === `dog`);
console.log(dogs);

let jasper = pets.find(pet => pet.name === `Jasper`)
console.log(`Jasper is ${jasper.age} years old`);

