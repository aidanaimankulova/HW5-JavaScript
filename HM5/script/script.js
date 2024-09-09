// WORK1 MAP
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const sumofPeople = people.map(person => {
    return { ...person, age: person.age + 5 };
});

console.log(sumofPeople);



// WORK2
const people1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const names = people1.map(person => person.name);

console.log(names);


// WORK3 FILTER
const people2 = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 15 }
];

const filterName = people2.filter(person => person.age > 18);

console.log(filterName);


// WORK4 
const people3 = [
    { name: 'Alice', voted: true },
    { name: 'Bob', voted: false },
    { name: 'Charlie', voted: true },
    { name: 'Dave', voted: false }
];

const voters = people3.filter(person => person.voted);

console.log(voters);



// WORK5
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 62 },
    { name: 'Charlie', grade: 74 },
    { name: 'Dave', grade: 55 }
];

const passedStudents = students.filter(student => student.grade > 70);

console.log(passedStudents);



// WORK6
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];

products.forEach(product => {
    product.discountedPrice = product.price * 0.9;
});

console.log(products);
