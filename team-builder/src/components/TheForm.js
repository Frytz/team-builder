import React from "react";
import styled from "styled-components";

const Form  =  styled.form`
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

margin-top:100px;
`
const Button = styled.button`
width:max-content;
margin-top:5px;
background-color: dodgerblue;
border-radius:5pt;
`
const NameDiv = styled.div`
display:flex;
flex-direction:row;
flex-wrap:nowrap;
`

const NameDivInputs = styled.div`
margin:0 5px;
`
export default function TheForm (props) {
    const {addMem, changeHandle, newMem} = props;

    return (
      <Form>
        <NameDiv>
          <NameDivInputs>
            <label>
              First name
              <br />
              <input
                placeholder="First name"
                name="fname"
                type="text"
                onChange={changeHandle}
              />
            </label>
          </NameDivInputs>
          <NameDivInputs>
            <label>
              Last Name
              <br />
              <input
                placeholder="Last Name"
                name="lname"
                type="text"
                onChange={changeHandle}
              />
            </label>
          </NameDivInputs>
        </NameDiv>
        <Button onClick={addMem}>submit now</Button>
      </Form>
    );
} 