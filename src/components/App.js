import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { AlphaBets } from './AlphaBets';
import { CountryDetails } from './CountryDetails';
import { CountryNames } from './CountryNames';

import { images } from 'images'

import { selectCountries } from 'redux/selector';

import { indexToAlphabet } from 'utils'

export const App = () => {
  const [selectedAlphaBetIndex, setSelectedAlphaBetIndex] = useState(0);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);

  const countries = useSelector(selectCountries());
  const alphaBetsArray = (countries && countries.length) ? countries.map((_, index) => indexToAlphabet(index)) : []
  const countryNamesArray = (countries && countries[selectedAlphaBetIndex]) ? countries[selectedAlphaBetIndex].map((country, _) => country.name) : [];
  const countryDetails = (countries && countries[selectedAlphaBetIndex]) ? countries[selectedAlphaBetIndex][selectedCountryIndex] : null

  return (
    <Container>
      <Navbar></Navbar>
      <Body>
        <AlphaBets searchedAlphaBets={alphaBetsArray} setSelectedIndex={setSelectedAlphaBetIndex}></AlphaBets>
        <CountryNames countryNames={countryNamesArray} setSelectedIndex={setSelectedCountryIndex}></CountryNames>
        <CountryDetails details={countryDetails}></CountryDetails>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  &:before {
    background: rgba(44,51,65,.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    z-index: 0;
    opacity: 1.0;
  }
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: url(${images.darkBackground}) center center / cover no-repeat;
    z-index: -1;
  }
`
const Body = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 60px 20px 20px 60px;
  overflow-y: hidden;
  height: 100%;
  width: 100%;
`