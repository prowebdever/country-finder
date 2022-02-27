import React from 'react'
import styled from 'styled-components'
import { Loading } from 'components/Loading'

export const CountryDetails = ({ details }) => {
    return (
        <Container>
            <MainWrapper>
`                <DetailsWrap>
                    <CountryName>{details ? details.name : <Loading />}</CountryName>
                    <CountryInformation>
                        <Grid>
                            <CellHead>Capital</CellHead>
                            <CellValue>{details ? details.capital : <Loading />}</CellValue>
                            <CellHead>Population</CellHead>
                            <CellValue>API Not Supported Yet</CellValue>
                            <CellHead>alpha2Code</CellHead>
                            <CellValue>{details ? details.alpha2Code : <Loading />}</CellValue>
                            <CellHead>Flag</CellHead>
                            <CellValue>API Not Supported Yet</CellValue> 
                        </Grid>
                    </CountryInformation>
                </DetailsWrap>
            </MainWrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`
const MainWrapper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & * {
        color: #fff;
        display: flex;
    }
`
const DetailsWrap = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px;
    position: relative;
    background: rgba(255,255,255,.1);
    padding: 30px;
    min-width: 500px;
    white-space: wrap;
    align-items: flex-start;
    justify-content: center;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    -webkit-box-shadow: 0 1px 49px 0px rgb(0 0 0 / 30%);
    box-shadow: 0 1px 49px 0px rgb(0 0 0 / 30%);
`
const CountryName = styled.div`
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0;
    min-height: 30px;
    justify-content: center;
    width: 100%;
`
const CountryInformation = styled.div`
    background: rgba(129,170,255,.06);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
    padding: 0;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1.4rem;
    width: 100%;
`
const Cell = styled.span`
    padding: 12px;
    border-bottom: 2px solid rgba(0,0,0,.2);
    font-size: 1.4rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CellHead = styled(Cell)`
    background: rgba(129,170,255,.15);
    
    &:first-child {
        border-top-left-radius: 10px;
    }

    &:nth-child(7) {
        border-bottom-left-radius: 10px;
    }
`
const CellValue = styled(Cell)`
    &:first-child {
        border-top-right-radius: 10px;
    }

    &:nth-child(8) {
        border-bottom-right-radius: 10px;
    }
`