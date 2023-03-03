import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails() {
  const params = useParams();

  const { idCountry } = params;

  const [countryDetails, setCountryDetails] = useState(null);
  // console.log(countryDetails)
  // console.log(countryDetails.alpha3Code)

  useEffect(() => {
    getDataCountry();
  }, [idCountry]);

  const getDataCountry = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${idCountry}`
      );
      // console.log(response)
      setCountryDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-7">
      {countryDetails === null ? (
        <h2>Buscando</h2>
      ) : (
        <div>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="" width="100px"/>
          <h3>{countryDetails.name.common}</h3>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryDetails.name.common}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryDetails.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryDetails.borders.map((eachBorders) => {
                      return (
                        <p key={eachBorders}>
                          <Link to={`/countries-details/${eachBorders}`}>
                            {eachBorders}
                          </Link>
                        </p>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
