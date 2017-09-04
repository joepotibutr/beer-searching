import styled from 'styled-components'
import { Flex } from '../Theme/Grid'


export const Header = styled(Flex)`
    height: 150px;
    visibility: ${ props => props.active ? 'visible' : 'hidden'};
    
`

export const Img = styled.img`
    height:150px;
    width:30px;

`

export const Grid = styled.div`
    display:grid;
    grid-template-areas:    "img head head" 
                            "img  main main "
                            "img  main main";

    grid-template-columns:  150px 1fr;
    grid-template-rows: 30% 70%;
    padding:20px 20px 20px 0;
    border-bottom:1px solid;
    
`


export const BeerName = styled(Flex)`
    grid-area:head;
    margin-bottom:30px;
`

export const BeerImg = styled(Flex)`
    grid-area:img;
    display:flex;
`

export const BeerDescription = styled(Flex)`
    grid-area:main;
    font-size:smaller;
    
`

export const Grids = styled.div`
    display:grid;
    grid-template-columns:50% 50%;


`