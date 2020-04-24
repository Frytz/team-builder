import React, {useState} from 'react';
// import './App.css';
//app css bypasssedS
//imports after clean up
import styled from "styled-components";
import TheForm from "./components/TheForm"

//styles

const Header = styled.div`
  height: max-content;
  position: fixed;
  z-index: 10;
  /* border-bottom: 3px darkgray dotted; */
  width: 100%;
  display: flex;
  background-color: #e6b0aa;
`;
const Title = styled.h1`
  align-self: flex-start;
  margin-left: 10px;

`;

const AppDiv = styled.div `
display:flex;
  width: 100vw;
  height:100vh;
  align-self:center;
  /* border:1px red solid; */
  align-self:center;
  justify-content:center;
  text-align:center;

`
//whats displayed
function App() {
  return (
<AppDiv>
  <Header>
    <Title>TeamMates</Title>
  </Header>
  <TheForm />
</AppDiv>
  );
}

export default App;
