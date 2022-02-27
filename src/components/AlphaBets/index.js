import React from 'react'
import styled from 'styled-components'
import { Menu } from 'components/Menu'

export const AlphaBets = ({ searchedAlphaBets, setSelectedIndex }) => {
    return (
        <Container>
            <StyledMenu menuItems={searchedAlphaBets} setSelectedIndex={setSelectedIndex}></StyledMenu>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    margin: 0 20px 0 0;
`
const StyledMenu = styled(Menu)`
    width: 100%;
    min-height: 80%;
    
    &:after {
        content: '';
        background: rgba(42,109,255,.2);
        -webkit-filter: blur(80px);
        filter: blur(80px);
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: -1;
    }
`