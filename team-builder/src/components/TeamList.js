import React from 'react'
import styled from 'styled-components'

// //styles

const TeamDiv = styled.div`
display:flex;
flex-direction:row;
/* border: 1px red solid */
`
const CardsDiv= styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
`

const Div = styled.div`
display:flex;
flex-Direction:column;
background:white;
margin:2% 2%;
border:3px grey solid;
width: 200px;
height:200px;
text-align:center;
`




const TeamList = (props) => {
  console.log("listname:", props);

  return (
   <TeamDiv>
   <CardsDiv>
      {props.teamNames.map((name) => (
        <Div key={name.id}>
          <h2>{name.name}</h2>
          <p>{name.status}</p>
          <p>{name.role}</p>
        </Div>
      ))}
    </CardsDiv>
    </TeamDiv>
  );
};

export default TeamList;

