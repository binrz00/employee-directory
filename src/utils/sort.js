export default function sort(people, param, order, dispatch) {
  let keys = [];
  let orderedpeople = [];
  if (param === "name") {
    people.map(person => {
      keys.push(person.name.last);
      keys.sort();
    });
    let z = 0;
    let y = 0;
    if (order === "asc") {
      while (y < 10) {
        for (let i = 0; people.length > i; i++) {
          if (keys[z] === people[i].name.last) {
            orderedpeople.push(people[i]);
            z = z + 1;
            i = 0;
            y++;
          }
        }
      }
    } else {
      while (y < 10) {
        for (let i = 0; people.length > i; i++) {
          if (keys[z] === people[i].name.last) {
            orderedpeople.unshift(people[i]);
            z = z + 1;
            i = 0;
            y++;
          }
        }
      }
    }
  }

  if (param === "age") {
    people.map(person => {
      keys.push(person.dob.age);
      keys.sort(function(a, b) {
        return b - a;
      });
    });
    let z = 0;
    let y = 0;
    if (order === "asc") {
      while (y < 10) {
        for (let i = 0; people.length > i; i++) {
          if (keys[z] === people[i].dob.age) {
            orderedpeople.unshift(people[i]);
            z = z + 1;
            i = 0;
            y++;
          }
        }
      }
    } else {
      while (y < 10) {
        for (let i = 0; people.length > i; i++) {
          if (keys[z] === people[i].dob.age) {
            orderedpeople.push(people[i]);
            z = z + 1;
            i = 0;
            y++;
          }
        }
      }
    }
  }
  dispatch({
    type: "UPDATE_PEOPLE",
    payload: {
      people: orderedpeople
    }
  });
}
