import React, {useState} from 'react';
// import './App.css';
//app css bypasssedS
//imports after clean up
// import styled from "styled-components";
import TeamList from "./components/TeamList";
import TheForm from "./components/TheForm"

//styles

import "./App.css";

function App() {
  const [teamNames, setTeamNames] = useState([
    {
      name: "John Doe",
      status: "Student",
      role: "Full Stack",
    },
  ]);

  const addNewName = (info) => {
    console.log("addNewName:", info);
    const newName = {
      id: Date.now(),
      name: info.name,
      status: info.status,
      role: info.role,
    };
    setTeamNames([...teamNames, newName]);
  };

  console.log("from app:", teamNames);
  return (
    <div>
      <TheForm addNewName={addNewName} />
      <TeamList teamNames={teamNames} />
    </div>
  );
}

export default App;