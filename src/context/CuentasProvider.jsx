import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Primer paso creo mi contexto, esto es lo que se va a proveer con los values
const CuentasContext = createContext();
// Segundo paso creo mi context para poder exportar a los children que quieran consumir de este context
export const CuentasConsumer = () => useContext(CuentasContext);
const CuentasProvider = ({ children }) => {
    
    // Inicializo mi monto y mis gastos;
    const [monto, setMonto] = useState(0);
    // Va a ser un array de objetos con un valor y una description ? 
    const [gastos, setGastos] = useState([]);
    // Se utiliza para navegar a un punto en especifico de mi aplicacion
    const navigate = useNavigate();
  
  const modificarMonto = (numero) => {
    setMonto(numero);
  };

  const agregarGastos = (consumo) => {
      // Agrego mis consumos a mis gastos
    setGastos([...gastos, consumo]);
    // Calculo el valor de mi monto
    const nuevoMonto = monto - consumo.valor;
    // Actualizo mi monto
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
// Esto lo exporto a las rutas para que todos mis componentes puedan usar las funciones de este context
export default CuentasProvider;
