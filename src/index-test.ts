class Human {
  public name: string;
  public age: number;
  public gender: string;
  // 클래스가 시작될 때마다 호출됨
  constructor(name: string, age: number, gender: string) {
    //class의 name은 constructor(생성자)의 name과 같다.
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// JS 로 컴파일 되지않음.
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: "Hob",
//   age: 31,
//   gender: "male",
// };
const person = new Human("Test", 20, "male");

const sayHello = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHello(person));

export {};
