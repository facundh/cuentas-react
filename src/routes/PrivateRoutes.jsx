import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { CuentasConsumer } from '../context/CuentasProvider';

// Siempre recibe dos parametros componente que es adonde vas si cumple 
// la condicion y redirect adonde vas si no cumpels con la condicion
const PrivateRoutes = ({redirect, component}) => {
    const navigate = useNavigate();
    const { montoIngresado } = CuentasConsumer();

    

    // El effect sin llaves se ejecuta apenas se carga la pagina,
    // con llaves primero lee todas las lineas y luego se ejecuta 
    useEffect(() => {
       if(montoIngresado <= 0){
        navigate(redirect)
       }
    })
    return component;
}

export default PrivateRoutes
