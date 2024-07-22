import React from 'react'
import styled from 'styled-components'

import datos from '../assets/json/datos.json';
import Item from '../components/Item'
import ItemText from '../components/ItemText';
export default function Principal() {
  return (
    <>
      <DivImage className='itemImage'>
        {datos.map((item) => {
          if (item.type === 'image') {
            return (
              <Item key={Math.random()}
                titulo={item.titulo}
                descripcion={item.descripcion}
                img={item.img}
              />
            )
          }
        })}
      </DivImage>
      <DivText>
        {datos.map((item)=>{
          if(item.type === 'text'){
            return(
              <ItemText key={Math.random()}
                img={item.img}
                titulo={item.titulo}
                descripcion={item.descripcion}
              />
            )
          }
        })}
      </DivText>
    </>
  )
}

const DivImage = styled.div `
  @media (max-width: 767px){
    .container__item{
      flex-direction: column;
      flex-direction: column-reverse;
    }
  }
`;

const DivText = styled.div `
  /* border:2px solid blue; */
  display: flex;
  min-width: 100%;

  @media (max-width: 767px){
    flex-direction: column;
  }
`;