import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastrar } from "../components/Cadastrar";
import { Editar } from "../components/Editar";
import { HomeUser } from "../components/HomeUser";
import { MainTemplate } from "../components/Layout/MainTemplate";
import { MinhasRequisicoes } from "../components/MinhasRequisicoes";
import { Requisitar } from "../components/Requisitar";
import { ResultadoBusca } from "../components/ResultadoBusca";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
/* import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
 */

const RoutesApp = () => {
  return (
    <BrowserRouter>
 
        <Fragment>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/homeuser" element={<HomeUser />} />
            <Route path="/resultadobusca" element={<ResultadoBusca />} />
            <Route path="/minhasrequisicoes" element={<MinhasRequisicoes />} />


            <Route path="/product" element={<Home />} />
            <Route path="/requisitar" element={<Requisitar />} />
            <Route path="/editar" element={<Editar />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
          </Routes>
        </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
