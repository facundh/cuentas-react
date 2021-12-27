import React from 'react'
import { CuentasConsumer } from '../../context/CuentasProvider'


const Inicio = () => {
    const [ modificarMonto ] = CuentasConsumer();
    return (
        <>
            <h3>HOLA</h3>
           
        </>
    )
}

export default Inicio
