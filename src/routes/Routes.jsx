import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CuentasProvider from "../context/CuentasProvider";
import Cuentas from "../views/Cuentas";
import Principal from "../views/Principal";
import PrivateRoutes from "./PrivateRoutes";

const Rutas = () => {
  return (
    <Router>
      <CuentasProvider>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/cuentas" element={<PrivateRoutes redirect="/" component={<Cuentas />} />} />
        </Routes>
      </CuentasProvider>
    </Router>
  );
};

export default Rutas;
