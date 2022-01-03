import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Primer paso creo mi contexto, esto es lo que se va a proveer con los values
const CuentasContext = createContext();
// Segundo paso creo mi context para poder exportar a los children que quieran consumir de este context
export const CuentasConsumer = () => useContext(CuentasContext);
const CuentasProvider = ({ children }) => {
  //Guardar monto 
  let valor  = sessionStorage.getItem('montoIngresado');
  let gastoS = JSON.parse(sessionStorage.getItem('gastos'));
  let montoS = JSON.parse(sessionStorage.getItem('monto'));
  let colorS = sessionStorage.getItem('pintarEstado');
  // Inicializo mi monto y mis gastos;
  const [monto, setMonto] = useState(montoS ||0);
  // Va a ser un array de objetos con un valor y una description ?
  const [gastos, setGastos] = useState(gastoS || []);
  
  const  [ montoIngresado, setMontoIngresdo ] = useState(valor || 0);

  const [pintar, setPintar] = useState(colorS || 'green' );
  // Se utiliza para navegar a un punto en especifico de mi aplicacion
  const navigate = useNavigate();

  // Borrar mi array de gastos de mi session storage
  useEffect(() =>{

    if(gastoS && gastoS.length < 1 ){
      sessionStorage.removeItem('gastos');
    }
  });

  const pintarEstado = (monto) => {
    let cincuenta = (montoIngresado / 2);
    let veinticinco = (cincuenta / 2);

    if(monto <= cincuenta && monto > veinticinco ){
      setPintar('yellow');
      sessionStorage.setItem('pintar', 'yellow');
    }else if( monto <= veinticinco){
      setPintar('red');
      sessionStorage.setItem('pintar', 'red');
    } else {
      setPintar('green');
      sessionStorage.setItem('pintar', 'green');
    }

  }

  const modificarMonto = (numero) => {
    if(numero < 1){
      alert('Ingresar valor mayor a 1');
      return;
    }
    setMonto(numero);
    setMontoIngresdo(numero);
    sessionStorage.setItem('montoIngresado', numero);
    sessionStorage.setItem('monto', numero);
    navigate("/cuentas");
  };


  const agregarGastos = (consumo) => {
  if((Number(consumo.valor) <= 0)  ){
    alert('Gasto debe ser mayor a 0');
    return;
  }else if((Number(consumo.valor) > monto)){
    alert('Saldo insuficiente');
    return;
  }
    // Agrego mis consumos a mis gastos
    setGastos([...gastos, consumo]);
    // Agrego un array con la copia de mis gastos
    let arrGastos = [...gastos,  consumo];
    // Guardo mis gastos en mi session storage, aca tengo que guardar mis gastos
    sessionStorage.setItem('gastos', JSON.stringify(arrGastos));
    // Calculo el valor de mi monto
    const nuevoMonto = monto - consumo.valor;
    pintarEstado(nuevoMonto);
    // Actualizo mi monto
    setMonto(nuevoMonto);

    sessionStorage.setItem('monto', nuevoMonto);
  };

  const borrarGasto = (index) => {
    // Primero detecto el gasto a devolver
    const montoDevuelto = gastos[index];
    console.log(montoDevuelto);
    // Restablezco mi valor de monto
    const montoRestablecido = monto + Number(montoDevuelto.valor);
    pintarEstado(montoRestablecido);
    setMonto(montoRestablecido);
    sessionStorage.setItem('monto', montoRestablecido);
    // Tercer paso borrar el gasto de mi lista de gastos, copia del state gastos.
    let nuevoArr = gastos;
    nuevoArr.splice(index, 1);
    // Cuarto actualizo mis gastos
    setGastos([...nuevoArr]);

    // Analizo si tengo gastos y lo actualizo, si no tengo gastos elimino el item de mi session
    if(nuevoArr.lenght < 1 ){
      sessionStorage.removeItem('gastos');
    } else {
      sessionStorage.setItem('gastos', JSON.stringify([...nuevoArr]));
    }
  };

  const resetarCuentas = () => {
    sessionStorage.clear();
    setMonto(0);
    setGastos([]);
    setMontoIngresdo(0)
    navigate({ to: "/" });
  };

  return (
    <CuentasContext.Provider
      value={{
        monto,
        montoIngresado,
        gastos,
        modificarMonto,
        agregarGastos,
        borrarGasto,
        resetarCuentas,
        pintar
      }}
    >
      {children}
    </CuentasContext.Provider>
  );
};
// Esto lo exporto a las rutas para que todos mis componentes puedan usar las funciones de este context
export default CuentasProvider;
