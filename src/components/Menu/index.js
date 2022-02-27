import React from 'react'
import styled from 'styled-components'
import { Loading } from 'components/Loading'

export const Menu = ({ className, menuItems, setSelectedIndex }) => {
    const selectIndex = (index) => {
        setSelectedIndex(index);
    }
    return (
        <Container className={className}>
            {menuItems && menuItems.length > 0 ? menuItems.map((item, index) => (
                <MenuItem key={index}>
                    <ItemName onClick={() => selectIndex(index)}>{item}</ItemName>
                </MenuItem>
            )) : <Loading>Loading</Loading>}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    padding: 10px 0 10px 0;
    background: rgba(152,183,253,.1);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    color: #fff;
    -webkit-box-shadow: 0px 0px 45px -1px rgb(23 27 34 / 31%);
    box-shadow: 0px 0px 45px -1px rgb(23 27 34 / 31%);
    margin: 10px 0 0 0;
`
const MenuItem = styled.div`
    display: flex;
    white-space: nowrap;
    margin: 15px 0 15px 0;
    &:hover {
        background: rgba(255,255,255,.1);
    }
`
const ItemName = styled.a`
    display: flex;
    text-decoration: none;
    padding: 7px 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 700;
    opacity: 1;
    line-height: 100%;
    cursor: pointer;
`