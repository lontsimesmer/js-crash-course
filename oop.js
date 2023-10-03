// function Student(name, email, batch) {
//   this.name = name;
//   this.email = email;
//   this.batch = batch;

//   print = () => {
//     console.log(`${this.name} with ${this.email} is from ${this.batch} batch`);
//   };
//   return this;
// }
// const dorine = new Student("Dorine", "dorine@gmail.com", "Jully 2023");
// const nora = new Student("Nora", "nora@gmail.com", "October 2023");

// class Students {
//   constructor(name, email, batch) {
//     this.name = name;
//     this.email = email;
//     this.batch = batch;
//   }

//   print = () => {
//     console.log(`${this.name} with ${this.email} is from ${this.batch} batch`);
//   };

//   get formatterLabel() {
//     return `${this.name}(${this.email})`;
//   }

//   set formatterLabel(value) {
//     const [name, batch] = value.split("(");
//     console.log(name, batch);
//     this.name = name;
//     // slice() = [0]
//     this.email = this.email.split(")")[0];
//   }
// }

// dorine.print();
// nora.print();

// declaration and how to call a function

// const dorine = {
//   name: "dorine",
//   email: "dorine@gmail.com",
//   batch: "july 23",
//   print() {
//     console.log(
//       `${student.name} with email ${student.email} is from ${student.batch} batch`
//     );
//   },
// };

// const nora = {
//   name: "nora",
//   email: "nora@gmail.com",
//   batch: "october 23",
//   print() {
//     console.log(
//       `${student.name} with email ${student.email} is from ${student.batch} batch`
//     );
//   },
// };

// dorine.print();
// printStudent(nora);

// constructor;

// function Student(name, email, batch) {
//   this.name = name;
//   this.batch = batch;
//   this.email = email;

//   this.print = () => {
//     console.log(`${this.name} ${this.email} is from ${this.batch} batch`);
//   };

//   return this;
// }

// const dorine = new Student("Dorine", "d@gmail.com", "july 23");
// const nora = new Student("nora", "n@gmail.com", "october 23");

// dorine.print();
// nora.print();

// Using class getters and setters

class Student {
  constructor (name, email, batch){
    this.name = name;
    this.batch=batch;
    this.email=email;
  }
  print = () =>{
          console.log(`${this.formatemail} ${this.email} is from ${this.batch} batch`);
        }
  get formatemail(){
    return `${this.email}`;
  }

  set formatemail(value){
    const [name,email] = value.split("(");
    this.name =name;
    this.email = email.split(")")[0];
  }
}

  const dorine = new Student("Dorine", "dorine@gmail.com", "july 23");
  const nora = new Student("nora", "nora@gmail.com", "october 23" );

 dorine.print();
 nora.print()
 nora.formatemail = "myra@gmail.com"
