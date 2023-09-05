import { styled } from "styled-components";
import Subject from "./Subject";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function FlowCCNew() {

  const { id } = useParams();
  const [url, setUrl] = useState("");
  const [req, setReq] = useState(null);
  const [isReq, setIsReq] = useState(null);

  const numPeriods = 8;
  const [subjects,setSubjects] = useState([
    ["Programação de Computadores 1", 1, [], [], "#fff", 0],
    ["Matemática Discreta", 1, [], [], "#fff", 0],
    ["Geometria Analítica e Cálculo Vetorial", 1, [], [], "#fff", 0],
    ["Cálculo Diferencial 1", 1, [], [], "#fff", 0],
    ["Introdução à Ciência da Computação", 1, [], [], "#fff", 0],
    ["Fundamentos de Arquitetura de Computadores", 1, [], [], "#fff", 0],
    ["Programação de Computadores 2", 2, [], [], "#fff", 0],
    ["Lógica para Ciência da Computação", 2, [], [], "#fff", 0],
    ["Álgebra Linear", 2, [15,16], [7,9], "#fff", 0],
    ["Cálculo 2", 2, [], [], "#fff", 0],
    ["Circuitos Digitais", 2, [], [], "#fff", 0],
    ["Laboratório de Circuitos Digitais", 2, [], [], "#fff", 0],
    ["Arquitetura de Computadores", 3, [], [], "#fff", 0],
    ["Estruturas de Dados", 3, [], [], "#fff", 0],
    ["Física 1", 3, [], [], "#fff", 0],
    ["Métodos Numéricos", 3, [], [], "#fff", 0],
    ["Cálculo 3", 3, [], [], "#fff", 0],
    ["Paradigmas de Programação", 3, [1,2], [23,24], "#fff", 0],
    ["Análise e Projetos de Algoritmos", 4, [], [], "#fff", 0],
    ["Probabilidade e Estatística", 4, [], [], "#fff", 0],
    ["Física 3 - A", 4, [], [], "#fff", 0],
    ["Introdução à Física Computacional", 4, [], [], "#fff", 0],
    ["Engenharia de Software 1", 4, [], [], "#fff", 0],
    ["Banco de Dados", 4, [], [], "#fff", 0],
    ["Algoritmos em Grafos", 5, [], [], "#fff", 0],
    ["Sistemas Operacionais", 5, [], [], "#fff", 0],
    ["Computação Gráfica", 5, [], [], "#fff", 0],
    ["Linguagens Formais e Teoria da Computação", 5, [], [], "#fff", 0],
    ["Redes de Computadores 1", 5, [], [], "#fff", 0],
    ["Projeto e Arquitetura de Software", 5, [], [], "#fff", 0],
    ["Desenvolvimento WEB", 5, [], [], "#fff", 0],
    ["Compiladores", 6, [], [], "#fff", 0],
    ["Inteligência Artificial", 6, [], [], "#fff", 0],
    ["Interface Humano-Computador", 6, [], [], "#fff", 0],
    ["Sistemas Distribuidos", 6, [], [], "#fff", 0],
    ["Redes de Computadores 2", 6, [], [], "#fff", 0],
    ["Projeto de Banco de Dados", 6, [], [], "#fff", 0],
    ["Engenharia de Software 2", 6, [], [], "#fff", 0],
    ["", 7, [], [], "#fff", 0],
    ["", 7, [], [], "#fff", 0],
    ["", 8, [], [], "#fff", 0],
  ]);

  if(id)
    completed(id.split('-'));
  
  const subByPeriods = [];

  for(let i=0; i<numPeriods; i++){
    subByPeriods[i] = subjects.filter( (e, ind) => {
      e[6] = ind;
      return e[1] === i+1;
    });
  }

  function clicked(index){
    turnReady(index);
    setSubjects([...subjects]);
  }

  function turnReady(index){
    if(subjects[index][5] !== 1){
      if(subjects[index][4] === "#fff")
        subjects[index][4] = "#ddd";
      subjects[index][5] = 1;
    } else {
      if(subjects[index][4] === "#ddd")
        subjects[index][4] = "#fff";
      subjects[index][5] = 0;
    }
    
  }

  function completed( list ){
    list.map( (e) => {
      if(subjects[e]){
        turnReady(e);
      }
      return 1; 
    });
  }

  function urlGenerator(){
    let param = window.location.origin + '/';
    subjects.map((e, i) => {
      if(e[5] === 1)
        param = param + i + "-";
      return 1;
    });
    setUrl(param);
    navigator.clipboard.writeText(param);
    alert("Link copiado!");
  }

  function clearSubs( item, ind ){
    if(item){
      subjects[item][ind].map((e) => {
        if(subjects[e][5] === 1)
          subjects[e][4] = "#ddd";
        else subjects[e][4] = "#fff";
        return 1;
      });
    }
  }

  function requires( list, sub ){
    clearSubs(req, 2);
    if(req !== sub){
      list.map((e) => {
        subjects[e][4] = "#d4d";
        return 1;
      });
      setReq(sub);
    } else setReq(null);
    setSubjects([...subjects]);
  }

  function isRequired( list, sub ){
    clearSubs(isReq, 3);
    if(isReq !== sub){
      list.map((e) => {
        subjects[e][4] = "#dd4";
        return 1;
      });
      setIsReq(sub);
    } else setIsReq(null);
    setSubjects([...subjects]);
  }
  
  return (
    <>
      <Container>
        {subByPeriods.map((el,ind) => {
          return <div key={ind}>
                      {el[0]? <div>{el[0][1]}º Período</div> : ""}
                      {el.map((e,i) => <Subject click={clicked} key={i} obj={e} before={requires} after={isRequired} />)}
                  </div>;
        })}
      </Container> 
      <Link>
        <button onClick={() => urlGenerator()}>Gerar URL</button>
        <div>{url}</div>
      </Link>
    </>
  );
}

const Container = styled.div`
  display: flex;
  
  & > div {
      margin: 10px;
      text-align: center;

      & > div {
          margin: 5px;
      }
  }
`;

const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & > div {
    margin-left: 20px;
  }

  & > button {
    width: 100px;
    height: 50px;
    background-color: #373;
    cursor: pointer;
    border-radius: 10px;
  }
`;