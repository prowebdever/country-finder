import React from 'react'
import styled from 'styled-components'
import { Menu } from 'components/Menu'

export const CountryNames = ({ countryNames, setSelectedIndex }) => {
    return (
        <Container>
            <StyledMenu menuItems={countryNames} setSelectedIndex={setSelectedIndex}></StyledMenu>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
`
const StyledMenu = styled(Menu)`
    background: rgba(0,0,0,.2);
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 40px;
`