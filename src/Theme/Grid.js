import styled , { css } from 'styled-components'

export const Flex = styled.div`

    display:flex;

    ${({ justify }) => justify && css`

        justify-content: ${ justify };

    ` }

    ${({ align }) => align && css`
    
        align-items: ${ align };
    `}

`

export const Layout = styled(Flex)`
    padding:20px;
    margin:0 auto;
    background:black;
`
export const Container = styled.div`
    background:black;
    height:700px;
    padding-top:100px;
`