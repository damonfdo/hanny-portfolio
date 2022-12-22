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

  const getData = async () => {
    const res = await axios.get('/portfolio');

    await setData(res.data);
  };
  useEffect(() => { getData(); }, [data]);
  console.log('data is being logged');
  console.log(data);
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
              <Projects data={data} />
              <Contact />
              <Footer />
            </>
          } />
          {/* Protected Routes  */}
          <Route path='/app' element={<Login />} />

          <Route path='/app/dashboard' element={<Dashboard data={data} />} />
          <Route path='/app/add' element={<AddItem />} />
          {/* <Route path='/app/edit/:id' element={<EditItem />} /> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
