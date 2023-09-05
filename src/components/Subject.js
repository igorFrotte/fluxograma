import styled from "styled-components";

export default function Subject( {obj, click} ) {

  return (
    <>
      <Sub onClick={() => click(obj[6])} color={obj[4]}>
        {obj[0]}
      </Sub>
    </> 
  );
}

const Sub = styled.div`
  border: 2px black solid;
  border-radius: 10px;
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.color};
`;
