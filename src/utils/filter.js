export default function filter(people, limit, age, dispatch) {
  const param = JSON.parse(age);
  if (limit === "under") {
    for (let i = 0; i < people.length; i++) {
      if (people[i].dob.age > param) {
        people.splice(i, 1);
        i=0
      }
    }
  } else {
    for (let i = 0; i < people.length; i++) {
      if (people[i].dob.age < param) {
        people.splice(i, 1);
        i=0
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
