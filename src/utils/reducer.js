export default function reducer(state, action) {
    if (action.type === "UPDATE_PEOPLE") {
      return {
        ...state,
        people: action.payload.people
      };
    }
  }
  