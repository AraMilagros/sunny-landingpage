import React from 'react'

import styled from 'styled-components'
const imagen = require.context('../assets/img/mobile', true);

export default function Galeria() {
  return (
    <Div>
      <div className='item'><img src={imagen('./image-gallery-milkbottles.jpg')} alt="milkbottles" /></div>
      <div className='item'><img src={imagen('./image-gallery-orange.jpg')} alt="orange" /></div>
      <div className='item'><img src={imagen('./image-gallery-cone.jpg')} alt="cone" /></div>        
      <div className='item'><img src={imagen('./image-gallery-sugar-cubes.jpg')} alt="sugar-cubes" /></div>        
        
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  .item{
    flex: 1 1 0;
  }

  .item img{
    width: 100%;
    height: 100%;
  }

  @media (max-width: 767px){
    display: grid;

    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;

  }
`;