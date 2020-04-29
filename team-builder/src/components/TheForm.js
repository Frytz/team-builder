import React, {useState} from "react";
import styled from "styled-components";

const Form  =  styled.div`
display:flex;
flex-direction:column;
background: dodgerblue;
color:black;
align-items:center;
border:3px grey solid;
height:max-content;
width:max-content;
border-radius:5px;
padding:5px;
background-color: lightgrey;

margin-top:50px;
`
const Button = styled.button`
width:max-content;
margin-top:5px;
background-color: dodgerblue;
border-radius:5pt;
`
// const NameDiv = styled.div`
// display:flex;
// flex-direction:row;
// flex-wrap:nowrap;
// `

// const NameDivInputs = styled.div`
// margin:0 5px;
// `

const TheForm = (props) => {
  console.log("formprops", props);
  const [teamNames, setTeamNames] = useState([
    {
      name: "",
     status: "",
      role: "",
    },
  ]);

  const handleChange = (event) => {
    setTeamNames({
      ...teamNames,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(teamNames.name);
    // console.log(teamNames.email)
    // console.log(teamNames.role)

    props.addNewName(teamNames);
    setTeamNames({
      name: "",
      status: "",
      role: "",
    });
  };
  console.log("form:", teamNames);
  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={teamNames.name}
          onChange={handleChange}
        />
        <label>Status</label>
        <input
          type="text"
          name="status"
          value={teamNames.status}
          onChange={handleChange}
        />
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={teamNames.role}
          onChange={handleChange}
        />
        <Button>Submit!</Button>
      </form>
    </Form>
  );
};

export default TheForm;