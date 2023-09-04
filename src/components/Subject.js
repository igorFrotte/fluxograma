import styled from "styled-components";

export default function Subject( {obj} ) {

  return (
    <>
      <Sub color={obj[4]}>
        {obj[0]}
      </Sub>
    </> 
  );
}

const Sub = styled.div`
  border: 2px black solid;
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.color};
`;
