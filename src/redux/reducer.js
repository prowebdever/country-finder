import { createReducer } from "@reduxjs/toolkit";
import { getCountryList } from './actions'

export const countryReducer = createReducer({ countries: [] }, {
  [getCountryList] : (state = { countries: [] }, action) => {
        let countries = state.countries;
        if (countries[action.payload.alphabet] === undefined || countries[action.payload.alphabet].length === 0 ) {
            countries[action.payload.alphabet] = action.payload.countries;
        }
        state.countries = countries;
        return state;
  }
});