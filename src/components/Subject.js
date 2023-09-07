import styled from "styled-components";

export default function Subject( {obj, click, before, after} ) {

  return (
    <Container>
      {obj[2].length? <p className="before" onClick={() => before(obj[2], obj[6])}>{"<-"}</p>: ""}
      {obj[3].length? <p className="after" onClick={() => after(obj[3], obj[6])}>{"->"}</p> : ""}
      {obj[7]? <p className="desc" onClick={() => alert(obj[7])}>{"i"}</p> : ""}
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

  .before {
    left: 5px;
    background-color: #a5a;
  }

  .after {
    right: 5px;
    background-color: #aa5;
  }

  .desc {
    left: calc(50% - 8px);
    background-color: #5aa;
  }
`;
