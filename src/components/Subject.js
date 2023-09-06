import styled from "styled-components";

export default function Subject( {obj, click, before, after} ) {

  return (
    <Container>
      <p onClick={() => before(obj[2], obj[6])}>{"<-"}</p>
      <p onClick={() => after(obj[3], obj[6])}>{"->"}</p>
      <Sub onClick={() => click(obj[6])} color={obj[4]}>
        {obj[0]}
      </Sub>
    </Container> 
  );
}

const Sub = styled.div`
  border: 2px black solid;
  padding: 5px;
  border-radius: 10px;
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: default;
  background-color: ${(prop) => prop.color};
`;

const Container = styled.div`
  position: relative;

  & > p {
    position: absolute;
    bottom: 5px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    border-radius: 25%;
    font-size: 10px;
  }

  & > p:nth-child(1) {
    left: 5px;
    background-color: #a5a;
  }

  & > p:nth-child(2) {
    right: 5px;
    background-color: #aa5;
  }
`;
