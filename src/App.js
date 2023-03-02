import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(()=>{
    getData()
  },[])

  //! ASYNC - AWaIT
  const getData = async () => {
    try {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      // console.log(response.data)
      setAllCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="App">

      <Navbar />
      {/* <CountriesList allCountries={allCountries}/> */}
      
    <Routes>
      <Route path='/' element={<CountriesList allCountries={allCountries}/>} />
      <Route path='/countries-details/:idCountry' element={<CountryDetails/>} />
    </Routes>
      


    </div>
  );
}

export default App;

