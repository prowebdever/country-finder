import axios from "axios";
import { API_ACCESS_KEY } from "constants";

export const fetchCountryData = async (alphabetIndex) => {
    const curAlphabet = String.fromCharCode('A'.charCodeAt(0) + alphabetIndex % 26);
    
    return axios.get(`http://api.countrylayer.com/v2/all?access_key=${API_ACCESS_KEY}`).then((response) => {
        const countries = [];
        response.data.forEach((data) => {
            if (data.name.at(0) === curAlphabet.at(0)) countries.push(data);
        })
        
        console.log("countries=", countries);
        return { countries, alphabet: alphabetIndex % 26 };
    });
}