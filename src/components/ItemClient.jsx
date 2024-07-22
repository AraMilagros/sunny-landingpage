import React from 'react'

import styled from 'styled-components'
const imagen = require.context('../assets/img/clientes', true);

export default function ItemClient(props) {
  return (
    <Div>
      <img src={imagen(props.img)} alt="" />
      <p className='div__testimonio'>{props.testimonio}</p>
      <div className='div__cliente'>
        <label>{props.nombre}</label>
        <label>{props.puesto}</label>
      </div>
    </Div>
  )
}

const Div = styled.div`
  /* border:2px solid green; */
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;


  img{
    border-radius: 50%;
    /* width: 50%; */
  }

  .div__testimonio{
    width: 80%;
    text-align: center;
    margin: 2em 0;
  }

  .div__cliente{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .div__cliente label:first-child{
    font-weight: bold;
    margin-bottom: .5em;
  }

  @media (max-width: 767px){
    justify-content: center;
    margin: 1.5em;
  }

  @media (max-width: 567px){
    margin: 1.5em 0;
    
    .div__testimonio{
      width: 50%;
    }
  }
`;



