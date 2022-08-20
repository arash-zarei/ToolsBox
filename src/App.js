import React, { useState , useEffect } from "react";

import { Route, Routes , Navigate } from "react-router-dom";
import axios from "axios";

import falgIran from './images/iran.png';
import flagGlobal from './images/worldwide.png';
import * as shamsi from 'shamsi-date-converter';


import NavBar from "./components/NavBarComponents/NavBar";
import Header from "./components/HeaderComponents/Header";
import Home from "./components/HomeComponents/Home";
import StopWatch from "./components/StopWatchComponents/StopWatch";
import CreatePassword from "./components/createPasswordComponents/CreatePassword";
import Covid from "./components/CovidComponents/Covid";
import CovidStatistics from "./components/CovidComponents/CovidStatistics";
import DefaultCovid from "./components/CovidComponents/DefaultCovid";
import DotCounter from "./components/DotCounterComponent/DotCounter";
import Calculator from "./components/CalculatorComponents/Calculator";
import ConvertDate from "./components/DateComponents/ConvertDate";
import DefaultDate from "./components/DateComponents/DefaultDate";
import ConverCom from "./components/DateComponents/ConverCom";
import Camera from "./components/CameraComponents/Camera";
import EditePhoto from "./components/EditePhotoComponents/EditePhoto";
import Crypto from "./components/CryptoComponents/Crypto";
import ToDoTask from "./components/ToDoComponents/ToDoTask";
import Error from "./components/404Components/Error";

import styles from "./App.module.css";
import "./index.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const [Countries , setCountries] = useState({})
  const [global , setGlobal] = useState({})

  // jalali date
  
  const [dateJalali , setDateJalali] = useState({
    day: '',
    mount: '',
    year: '',
  })
  const [miladi , setMiladi] = useState([])

  const jalaliTo = ()=>{
    const day = Number(dateJalali.day)
    const mount = Number(dateJalali.mount)
    const year = Number(dateJalali.year)
    const dateChanged = shamsi.jalaliToGregorian(year,mount,day)
    setMiladi(dateChanged)
}
  const changeHandlerJalali = event =>{
    setDateJalali({...dateJalali,[event.target.name]: event.target.value})
  }

  // miladi date

  const [datemiladi , setDatemiladi] = useState({
    day: '',
    mount: '',
    year: '',
  })
  const [jalali , setJalali] = useState([])
  
    const miladiTo = ()=>{
      const day = Number(datemiladi.day)
      const mount = Number(datemiladi.mount)
      const year = Number(datemiladi.year)
      const dateChanged = shamsi.gregorianToJalali(year,mount,day)
      setJalali(dateChanged)
  }

  const changeHandlerMiladi = event =>{
    setDatemiladi({...datemiladi,[event.target.name]: event.target.value})
  }

  // end date component

  const changeMenu = () => {
    setOpen(!open);
  };

  useEffect(()=>{
    axios.get('https://api.covid19api.com/summary')
        .then(respons => setCountries(respons.data.Countries[79]))
    axios.get('https://api.covid19api.com/summary')
        .then(respons => setGlobal(respons.data.Global))
  } , [])

  return (
    <div className="container">
      <div className={styles.headerContent}>
        <Header openMenu={changeMenu} />
        <Routes>
              <Route path="/" element={<Home status={open} />} />
              <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/covid19/*" element={<Covid />}>
              <Route path="" element={<DefaultCovid />} />
              <Route path="iran" element={<CovidStatistics image={falgIran} newConfirmed={Countries.NewConfirmed} totalConfirmed={Countries.TotalConfirmed} newDeaths={Countries.NewDeaths} totalDeaths={Countries.TotalDeaths} newRecovered={Countries.NewRecovered} totalRecovered={Countries.TotalRecovered} />} />
              <Route path="global" element={<CovidStatistics image={flagGlobal} newConfirmed={global.NewConfirmed} totalConfirmed={global.TotalConfirmed} newDeaths={global.NewDeaths} totalDeaths={global.TotalDeaths} newRecovered={global.NewRecovered} totalRecovered={global.TotalRecovered} />} />
          </Route>
          <Route path="/converterdate/*" element={<ConvertDate />}>
              <Route path="" element={<DefaultDate />} />
              <Route path="jalalitomiladi" element={<ConverCom dateType={miladi} onclick={jalaliTo} changeHandler={changeHandlerJalali} date={dateJalali} />} />
              <Route path="miladitojalali" element={<ConverCom dateType={jalali} onclick={miladiTo} changeHandler={changeHandlerMiladi} date={datemiladi} />} />
          </Route>
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/createpassword" element={<CreatePassword />} />
              <Route path="/dotcounter" element={<DotCounter />} />
              <Route path="/camera" element={<Camera />} />
              <Route path="/editphoto" element={<EditePhoto />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/todolist" element={<ToDoTask />} />
              <Route path="/notfound" element={<Error />} />
              <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>

      <div id={open ? "" : styles.closeMenu} className={styles.navBarMenu}>
        <NavBar closeMenu={changeMenu} />
      </div>
    </div>
  );
};

export default App;