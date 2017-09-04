import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

export const InputText = styled.input`
    background-color:transparent !important;
    border: none !important;
    border-bottom: 1px solid #CCC !important;
    color: white !important;
    box-sizing: border-box !important;
    border-radius:0 !important;
    &:focus {
        outline: none !important;    
      }
    `

    export const ButtonSearch = styled(Button)`
      background-color:black !important;
      color:white !important;
      transition:.3s !important;
      &: hover {
        color: lightblue !important;
        transform:scale(2) !important;
      }
    `

    export const SearchWrapper = styled.div`
      height: ${props => props.active ? '100%':'0'} ;
      width: 100%;
      position: fixed;
      z-index: 3;
      top: 0;
      left: 0;
      background-color: white;
      overflow: hidden;
      transition: 0.7s ease-in-out;
      text-align:center; 
      display:grid;
      grid-template-rows:100%;
`

      export const CloseBtn = styled.span`
          cursor:pointer;
          z-index:4;
          position:absolute;
          color:#1B2631;
          top:50px;
          left:50px;
          font-size:2em;
          transform:scale(1.5,1);
      `