import { styled } from "styled-components";
import Subject from "./Subject";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FlowCCNew() {

  const { id } = useParams();
  const [url, setUrl] = useState("");
  const [req, setReq] = useState(null);
  const [isReq, setIsReq] = useState(null);
  const [free, setFree] = useState(false);

  const numPeriods = 8;
  const [subjects,setSubjects] = useState([
    ["Programação de Computadores 1", 1, [], [6,15], "#fff", 0],
    ["Matemática Discreta", 1, [], [7,19], "#fff", 0],
    ["Geometria Analítica e Cálculo Vetorial", 1, [], [8], "#fff", 0],
    ["Cálculo Diferencial 1", 1, [], [9], "#fff", 0],
    ["Introdução à Ciência da Computação", 1, [], [], "#fff", 0],
    ["Fundamentos de Arquitetura de Computadores", 1, [], [10,11], "#fff", 0],
    ["Programação de Computadores 2", 2, [], [12,17,13], "#fff", 0],
    ["Lógica para Ciência da Computação", 2, [], [32], "#fff", 0],
    ["Álgebra Linear", 2, [], [26,15], "#fff", 0],
    ["Cálculo 2", 2, [], [19,14,15,16,20], "#fff", 0],
    ["Circuitos Digitais", 2, [], [12], "#fff", 0],
    ["Laboratório de Circuitos Digitais", 2, [], [], "#fff", 0],
    ["Arquitetura de Computadores", 3, [], [25,28], "#fff", 0],
    ["Estruturas de Dados", 3, [], [26,18,32,33,22,23,27], "#fff", 0],
    ["Física 1", 3, [], [20], "#fff", 0],
    ["Métodos Numéricos", 3, [], [21], "#fff", 0],
    ["Cálculo 3", 3, [], [], "#fff", 0],
    ["Paradigmas de Programação", 3, [], [22,31], "#fff", 0],
    ["Análise e Projetos de Algoritmos", 4, [], [24], "#fff", 0],
    ["Probabilidade e Estatística", 4, [], [32], "#fff", 0],
    ["Física 3 - A", 4, [], [], "#fff", 0],
    ["Introdução à Física Computacional", 4, [], [], "#fff", 0],
    ["Engenharia de Software 1", 4, [], [29], "#fff", 0],
    ["Banco de Dados", 4, [], [29,30,36], "#fff", 0],
    ["Algoritmos em Grafos", 5, [], [], "#fff", 0],
    ["Sistemas Operacionais", 5, [], [34], "#fff", 0],
    ["Computação Gráfica", 5, [], [], "#fff", 0],
    ["Linguagens Formais e Teoria da Computação", 5, [], [31], "#fff", 0],
    ["Redes de Computadores 1", 5, [], [35], "#fff", 0],
    ["Projeto e Arquitetura de Software", 5, [], [37], "#fff", 0],
    ["Desenvolvimento WEB", 5, [], [], "#fff", 0],
    ["Compiladores", 6, [], [], "#fff", 0],
    ["Inteligência Artificial", 6, [], [], "#fff", 0],
    ["Interface Humano-Computador", 6, [], [], "#fff", 0],
    ["Sistemas Distribuidos", 6, [], [], "#fff", 0],
    ["Redes de Computadores 2", 6, [], [], "#fff", 0],
    ["Projeto de Banco de Dados", 6, [], [], "#fff", 0],
    ["Engenharia de Software 2", 6, [], [], "#fff", 0],
    ["Empreendedorismo", 7, [], [], "#fff", 0],
    ["Computação e Sociedade", 7, [], [], "#fff", 0],
    ["Ética", 8, [], [], "#fff", 0],
  ]);

  useEffect(() => {
    if(id)
      completed(id.split('-'));
    setSubjects([...subjects]);
  }, []);

  subjects.map((e,ind) => {
    e[6] = ind;
    e[3].map((el) => subjects[el][2].push(ind));
    return 1;
  });

  //tirar 11-21-38-39-40-
  subjects[11][7] = "Correquisito de Circuitos Digitais";
  subjects[21][7] = "Correquisito de Física 3 - A";
  subjects[38][7] = "Requer 1440hrs cursadas";
  subjects[39][7] = "Requer 1440hrs cursadas";
  subjects[40][7] = "Requer 1440hrs cursadas";
  
  const subByPeriods = [];

  for(let i=0; i<numPeriods; i++){
    subByPeriods[i] = subjects.filter( (e, ind) => e[1] === i+1);
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
    clearFree();
    if(item !== null){
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

  function clearFree(){
    subjects.map((e) => {
      if(e[4] === "#4dd"){
        if(e[5])
          e[4] = "#ddd";
        else e[4] = "#fff";
      }
      return 1;
    });
  }

  function freeSubs(){
    clearSubs(req, 2);
    clearSubs(isReq, 3);
    if(!free){
      subjects.map((e, i) => {
        let ready = e[2].filter((el) => subjects[el][5] === 0);
        if(ready.length === 0 && e[5] === 0)
          e[4] = "#4dd";
        return 1;
      });
    }
    setFree(!free);
    setSubjects([...subjects]);
    return 1;
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
      <Menu>
        <div>{url}</div>
        <div>
          <button onClick={() => urlGenerator()}>Gerar URL</button>
          <button onClick={() => freeSubs()}>Livres</button>
        </div>
      </Menu>
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

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  div {
    margin-bottom: 10px;
  }

  button {
    width: 100px;
    height: 50px;
    background-color: #373;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 10px;
  }
`;