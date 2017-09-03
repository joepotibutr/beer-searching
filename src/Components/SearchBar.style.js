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
    `
