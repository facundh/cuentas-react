import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CuentasContext = createContext();
export const CuentasConsumer = () => useContext(CuentasContext);
const CuentasProvider = ({ children }) => {
    
    // Inicializo mi monto y mis gastos;
    const [monto, setMonto] = useState(0);
    const [gastos, setGastos] = useState([]);
    
    const navigate = useNavigate();
  
  const modificarMonto = (numero) => {
    setMonto(numero);
  };

  const agregarGastos = (consumo) => {
      // Agrego mis consumos a mis gastos
    setGastos([...gastos, consumo]);
    // actualizo el valor de mi monto
    const nuevoMonto = monto - consumo.valor;
    setMonto(nuevoMonto);
  };

  const borrarGasto = (id) => {
    // Primero detecto el gasto a devolver
    const montoDevuelto = gastos.find((gasto) => gasto.id === id);
    // Restablezco mi valor de monto
    const montoRestablecido = monto + montoDevuelto.valor;
    setMonto(montoRestablecido);
    // Tercer paso borrar el gasto de mi lista de gastos
    const gastosFiltrados = gastos.filter((gasto) => gasto.id !== id);
    // Cuarto actualizo mis gastos
    setGastos(gastosFiltrados);
  };

  const resetarCuentas = () => {
    setMonto(0);
    setGastos([]);
    navigate({to:'/'})
  }

  return (
    <CuentasContext.Provider
      value={(monto, gastos, modificarMonto, agregarGastos, borrarGasto, resetarCuentas)}
    >
      {children}
    </CuentasContext.Provider>
  );
};

export default CuentasProvider;
