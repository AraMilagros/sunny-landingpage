import React from 'react'
import styled from 'styled-components'

import datos from '../assets/json/clients.json';
import ItemClient from '../components/ItemClient';

export default function Clientes() {
  return (
    <Container>
        <h3>CLIENT TESTOMONIALS</h3>
        <Div>
            {datos.map((item)=>{
                return(
                    <ItemClient
                        key={Math.random()}
                        img={item.img}
                        testimonio={item.testimonio}
                        nombre={item.nombre}
                        puesto={item.puesto}
                    />
                )
            })}
        </Div>
    </Container>
  )
}

const Container = styled.div`
    /* border:2px solid red; */
    /* display: flex; */
    text-align: center;
    margin: 8em 0;

    h3{
        margin-bottom: 3em;
    }
`;

const Div = styled.div`
    /* border:2px solid blue; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767px){
        flex-direction: column;
    }
`;