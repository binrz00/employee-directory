export default function filter(people, limit, age, dispatch) {
  console.log(people.length);
  const param = JSON.parse(age);
  if (limit === "under") {
    for (let i = 0; i < people.length; i++) {
      if (people[i].dob.age > param) {
        people.splice(i, 1);
      }
    }
  } else {
    for (let i = 0; i < people.length; i++) {
      if (people[i].dob.age < param) {
        people.splice(i, 1);
      }
    }
  }
  dispatch({
    type: "UPDATE_PEOPLE",
    payload: {
      people: people
    }
  });
}
