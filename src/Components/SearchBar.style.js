import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

export const InputText = styled.input`
   
    `

    export const ButtonSearch = styled(Button)`
    padding:20px !important;

      
    `

    export const SearchWrapper = styled.div`
      height: 100%;
      opacity:${props => props.active ? '1':'0'} ;
      width: 100%;
      position: fixed;
      z-index: ${props => props.active ? '3':'-1'} ;;
      top: 0;
      left: 0;
      background-color:antiquewhite;
      transition: 0.7s ease-in-out;
      text-align:center; 
      display:grid;
      grid-template-rows:100%;
      overflow:auto;
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