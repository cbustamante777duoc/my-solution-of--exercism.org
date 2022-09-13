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


  const filtarEdad = students.filter((item)=> item.age > 21);
  const findRyan = students.find((item)=> item.name == "Ryan");
  const filterWebDevelpoment = students.filter((item)=> item.course == "Web Development");
  const preguntaPorGName = students.some((student) => student.name.includes("G"));
  console.log(preguntaPorGName); //false
