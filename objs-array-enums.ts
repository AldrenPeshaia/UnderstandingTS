// const person: {
//   name: string;
//   age: number;
// } = {
// const person:  {
//   name: string;
//   age: number;
//   hobbies: string[]; // normal array
//   role: [number, string]; // tuple => special array
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cookings"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READY_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READY_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cookings"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is admin");
}
