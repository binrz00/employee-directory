export default function filter(people, value) {
switch (value) {
    case "age":
      console.log("age");
      break;
    case "gender":
      console.log("gender");
      break;
    case "name":
      console.log("name");
      break;
    default:
      return alert("please select a parameter of age, gender, or name");
  }
}