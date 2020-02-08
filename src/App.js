import React, { useState, useEffect } from "react";
import Card from "./components/card";
function App() {
  const [people, setPeople] = useState([]);

  const getPeople = async function() {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const jsonres = await res.json();

    setPeople(jsonres.results);
  };
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="App">
      {people.map(card => (
        <Card {...card} />
      ))}

      {/* <Card /> */}
    </div>
  );
}

export default App;
