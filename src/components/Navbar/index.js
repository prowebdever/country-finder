import React from 'react'
import styled from 'styled-components'

export const Navbar = () => {
    return (
        <Container>
            <Title>Country Finder</Title>
        </Container>
    )
}

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 20px;
    background: rgba(25,30,39,1.0);
    -webkit-transition: all ease-out .5s;
    -moz-transition: all ease-out .5s;
    -o-transition: all ease-out .5s;
    transition: all ease-out .5s;
    flex-wrap: wrap;
    z-index: 3;
    color: white;
    width: 100%;
`

const Title = styled.h2`
    height: 100%;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 0 0 20px;
    -webkit-text-underline-position: under;
    text-underline-position: under;
    display: flex;
    align-items: center;
`