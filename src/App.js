import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import AdminPanel from "./Views/AdminPanel.jsx";
import PageConnexionAdmin from "./Views/PageConnexionAdmin.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalContext from './Components/GlobalContext.js';
import SommetGourmand from "./Views/Sommet/SommeGourmand.jsx";

function App() {

  const [userEmail, setUserEmail] = useState(window.localStorage.getItem('userEmail'));
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')));

  return <>
    <GlobalContext.Provider value={{ userEmail, setUserEmail, user, setUser }}>
      <BrowserRouter>
        {userEmail ? <>
          <Routes>
            <Route path={"/admin/*"} element={<AdminPanel />} />
            <Route path={"/connexion"} element={<PageConnexionAdmin />} />
            <Route path={"/*"} element={<SommetGourmand />} />    
          </Routes>
        </> : <>
          <Routes>
            <Route path={"/connexion"} element={<PageConnexionAdmin />} />
            <Route path={"/admin/*"} element={<PageConnexionAdmin />} />
            <Route path={"/*"} element={<SommetGourmand />} />
          </Routes>
        </>}        
      </BrowserRouter>
    </GlobalContext.Provider>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </>;
}

export default App;
