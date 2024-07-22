import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const desktop = require.context('../assets/img/desktop', true);
const mobile = require.context('../assets/img/mobile', true);

export default function ItemText(props) {
    const [width, setWidth] = useState(screen.width);
    
    useEffect(()=>{
        console.log(width);
        setWidth(screen.width)
    })
    
    return (
        <Div className='container_item'>
            <div className='item'>
                <div className='item_img' id='bg-imagen'>
                    <img src={width < '767px' ? desktop(props.img) : mobile(props.img)} alt="" />
                </div>
                <div className='item_text' id='text'>
                    <h2 className='item__tittle'>{props.titulo}</h2>
                    <p className='item__descripcion'>{props.descripcion}</p>
                </div>
            </div>

        </Div>

    )
}

const Div = styled.div`
    flex: 1 1 0;
    .item{
        position: relative;
        height: auto;
    }

    .item img{
        width: 100%;
    }

    #text{
        position: absolute;
        /* border: 2px solid red; */
        width: 50%;
        top:70%;
        left: 25%;
        text-align: center;
    }

    .item__tittle{
        margin-bottom: .5em;
    }

    /* @media (max-width: 767px){
       
        .item_img img{
            width: 100%;
            overflow: hidden;
        }
    } */
    /* @media (max-width: 567px){
        .item_img img{
            width: 90%;
        }
    } */

    @media (max-width: 320px){
        #text{
            top:55%;

        }
        .item__descripcion{
            /* border:2px solid red; */
            width: auto;
        }
    }

`
