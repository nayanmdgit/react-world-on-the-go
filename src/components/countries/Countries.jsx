
import { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    // const handleVisitedCountries = (country) => {
    //     // console.log('handle visited countries', country);
    //     const newVisitedCountries = [...visitedCountries, country];
    //     setVisitedCountries(newVisitedCountries);
    // }

    const handleVisitedCountries = (country) => {
        const exists = visitedCountries.find(
            c => c.cca3 === country.cca3
        );

        if (!exists) {
            setVisitedCountries([...visitedCountries, country]);
        }
    };

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries



    return (
        <div >
            <div className='countries-head'>
                <h1>Counties I Visited In The World</h1>
                <h2>Total Country: {countries.length}</h2>
                <h3>Total Country Visited: {visitedCountries.length} </h3>
            </div>

            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>


            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;