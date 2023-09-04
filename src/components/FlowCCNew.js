import { styled } from "styled-components";
import Subject from "./Subject";

export default function FlowCCNew() {

  const numPeriods = 8;
  const subjects = [
    ["Programação de Computadores 1", 1, [], [], "#fff", 0],
    ["Matemática Discreta", 1, [], [], "#fff", 0],
    ["Geometria Analítica e Cálculo Vetorial", 1, [], [], "#fff", 0],
    ["Cálculo Diferencial 1", 1, [], [], "#fff", 0],
    ["Introdução à Ciência da Computação", 1, [], [], "#fff", 0],
    ["Fundamentos de Arquitetura de Computadores", 1, [], [], "#fff", 0],
    ["Programação de Computadores 2", 2, [], [], "#fff", 0],
    ["Lógica para Ciência da Computação", 2, [], [], "#fff", 0],
    ["Álgebra Linear", 2, [], [], "#fff", 0],
    ["Cálculo 2", 2, [], [], "#fff", 0],
    ["Circuitos Digitais", 2, [], [], "#fff", 0],
    ["Laboratório de Circuitos Digitais", 2, [], [], "#fff", 0],
    ["Arquitetura de Computadores", 3, [], [], "#fff", 0],
    ["Estruturas de Dados", 3, [], [], "#fff", 0],
    ["Física 1", 3, [], [], "#fff", 0],
    ["Métodos Numéricos", 3, [], [], "#fff", 0],
    ["Cálculo 3", 3, [], [], "#fff", 0],
    ["Paradigmas de Programação", 3, [], [], "#fff", 0],
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

  ];
  
  const subByPeriods = [];

  for(let i=0; i<numPeriods; i++){
    subByPeriods[i] = subjects.filter( (e) => e[1]== i+1);
  }
  
  return (
    <Container>
      {subByPeriods.map((el,ind) => {
        return <div key={ind}>
                    {el[0]? <div>{el[0][1]}º Período</div> : ""}
                    {el.map((e,i) => <Subject key={i} obj={e} />)}
                </div>;
      })}
    </Container> 
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