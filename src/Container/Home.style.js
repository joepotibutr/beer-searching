import styled from 'styled-components'




export const Header = styled.h1`
    color:cadetblue;
    font-size:4em;
    font-family: 'Oswald', sans-serif;


`

export const P = styled.p`
    color:darksalmon;
    font-size:2em;
    font-weight:bold;
    font-family: 'Oswald', sans-serif;
`


export const BackgroundImage = styled.div`
    height:100vh;
    width:100%;
    background-size:cover;
  
    background-image: url('${require('../beer.jpg')}');
    background-position: top;

`
