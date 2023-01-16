import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from './lib/axios.js';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useState } from 'react';
import MySkills from './components/MySkills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Admin/Login';
import Dashboard from './components/Admin/Dashboard';
import AddItem from './components/Admin/Portfolio/AddItem';
import EditItem from './components/Admin/Portfolio/EditItem';


function App() {
  const [data, setData] = useState([]);


  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={
            <>
              <NavBar />
              <Banner />
              {/* <Skills /> */}
              <MySkills />
              {/* <Projects data={data} /> */}
              <Contact />
              <Footer />
            </>
          } />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
