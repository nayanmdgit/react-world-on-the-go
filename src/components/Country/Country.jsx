// import React from 'react';
import { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountries}) => {
    // console.log(country); 
    
const [visited, setVisited] = useState(false);



   const handleVisited = () =>{
        setVisited(!visited);
        handleVisitedCountries(country);
   }
    return (
        <div className="country">
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} ({country.area.area > 300000 ? "Big Country" : "Small Country"})</p>

             <button
                className={visited ? 'country-visited' : ''}
                onClick={handleVisited}
                disabled={visited}
            >
                {visited ? 'Visited' : 'Not Visited'}
            </button>
{/*             
            <button className={`${visited && `country-visited`}`} 
                    onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button> */}
        
        </div>
    );
};

export default Country;