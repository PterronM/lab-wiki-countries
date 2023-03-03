import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './pages/CountriesList';
import CountryDetails from './pages/CountryDetails';
// import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  // console.log(allCountries)

  useEffect(()=>{
    getData()
  },[])

  //! ASYNC - AWaIT
  const getData = async () => {
    try {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      // (response.data)
      setAllCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="App">

      <Navbar />
     
    <Routes>
      <Route path='/' element={<CountriesList allCountries={allCountries}/>} />
      <Route path='/countries-details/:idCountry' element={<CountryDetails/>} />
    </Routes>
      


    </div>
  );
}

export default App;

