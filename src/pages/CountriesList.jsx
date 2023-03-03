
import { Link } from "react-router-dom";

function CountriesList(props) {
  const {allCountries} = props
     


  return (
    <div>
      <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
          {allCountries.map((eachCountry)=>{
            
            return(
                <div key={eachCountry.alpha3Code}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt=""/>
                    <p>
                    <Link to={`/countries-details/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
                    </p>
                </div>
                
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
