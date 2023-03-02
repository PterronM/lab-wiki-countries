import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function CountryDetails() {


    // const {allCountries} = props
    // console.log(allCountries)

    const params = useParams()
    // console.log(params)
    const {idCountry} = params
    // console.log(idCountry)

    const [countryDetails, setCountryDetails] = useState(null);
    


    useEffect(()=>{
        getDataCountry()
    },[idCountry])


    const getDataCountry = async()=>{
        try {
            const response =  await axios.get(`https://ih-countries-api.herokuapp.com/countries/${idCountry}`)
            console.log(response)
            setCountryDetails(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
  
    <div className="col-7">
       {
        countryDetails === null ? <h2>Buscando</h2> 
        : <div>
            <h3>{countryDetails.name.common}</h3>

            <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{countryDetails.name.common}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>


        </div>
        }


    </div>
  );
}

export default CountryDetails;
