import React from 'react'
import styled from 'styled-components'

export const Loading = ({ className }) => {
    return (
        <Container className={className}>
            Loading
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    opacity: 1;
    line-height: 100%;
`