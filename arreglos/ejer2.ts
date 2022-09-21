export const students = [
    {
        name: "Jill",
        lastname: "Doe",
        age: 23,
        course: "Marketing",
    },
    {
        name: "John",
        lastname: "Doe",
        age: 20,
        course: "Web Development",
    },
    {
        name: "Jack",
        lastname: "Doe",
        age: 22,
        course: "Accounting",
    },
    {
        name: "Ryan",
        lastname: "Ray",
        age: 20,
        course: "Web Development",
    },
    {
        name: "Jane",
        lastname: "Doe",
        age: 21,
        course: "Financial Management",
    },
];

//ordena por edades
const ordenaEdades = students
    .sort((a, b) => a.age + b.age)
    .map((item) => item.age)

console.log(ordenaEdades); //[ 23, 20, 22, 20, 21 ]

//los mismo de arriba pero alreves en el sentido que hago el mapa y luego ordeno
const test = students
    .map((item) => item.age)
    .sort((a, b) => a + b)
console.log(test); //[ 23, 20, 22, 20, 21 ]


//Sumar todas las edades de los students
const sumaEdades = students.reduce((total, student) => total + student.age, 0);
console.log(sumaEdades);// 106


//filtra todos los nombres que no sean John y Ryan
const filtradoDosCampos = students
    .filter((item) => !item.name.includes("John") && !item.name.includes("Ryan"))

console.log(filtradoDosCampos);

// [{ name: 'Jill', lastname: 'Doe', age: 23, course: 'Marketing' },
// { name: 'Jack', lastname: 'Doe', age: 22, course: 'Accounting' },
// {
//     name: 'Jane',
//     lastname: 'Doe',
//     age: 21,
//     course: 'Financial Management'
// }]