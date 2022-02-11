import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./components/Main";
import {createBrowserHistory} from 'history';
import Cars from "./components/Cars";
import About from "./components/About";
import Home from "./components/Home";
import CarDetailsCC from "./components/CarDetailsCC";
import CarDetails from "./components/CarDetails";
class App extends Component {

  render() {

    const browserHistory = createBrowserHistory();
  const data = [
    {
      id: 1,
      name: "Honda Accord Crosstour",
      year: "2010",
      model: "Accord Crosstour",
      make: "Honda",
      media:
        "http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg",
      price: "$16,811",
    },
    {
      id: 2,
      name: "Mercedes-Benz AMG GT Coupe",
      year: "2016",
      model: "AMG",
      make: "Mercedes Benz",
      media:
        "http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg",
      price: "$138,157",
    },
    {
      id: 3,
      name: "BMW X6 SUV",
      year: "2016",
      model: "X6",
      make: "BMW",
      media:
        "http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg",
      price: "$68,999",
    },
    {
      id: 4,
      name: "Ford Edge SUV",
      year: "2016",
      model: "Edge",
      make: "Ford",

      media:
        "http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg",
      price: "$36,275",
    },
    {
      id: 5,
      name: "Dodge Viper Coupe",
      year: "2017",
      model: "Viper",
      make: "Dodge",
      media:
        "http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg",
      price: "$123,890",
    },
  ];

  return (
    <div className="App" >
      
      <Router history = {browserHistory}>
        <Main/>
        <Routes  >
          {/* <Route   path="/" element={<Main data = {data}/>} /> */}
          <Route  path="/cars" element={<> <Cars data={data} /></>}></Route>
          <Route  path="/home" element={<> <Home  /></>}></Route>
          <Route   path="/about" element={<> <About  /></>}></Route>
          <Route   path="/cars/:id" element={<CarDetails data = {data}  />}></Route>
      
        </Routes>
      </Router>
    </div>
  );
  }
}

export default App;
