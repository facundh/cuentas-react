import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CuentasConsumer } from "../../context/CuentasProvider";
import GastoItem from "../GastoItem/GastoItem";

const ListaGastos = () => {

  const {monto, gastos} = CuentasConsumer();
  return (
    <>
      <Box display={'flex'} flexDirection={'column'}  mx={'auto'} py={'40px'}>
      <Typography variant='h5' sx={{margin:'20px 0', backgroundColor:'lightblue', }} >Ingresos:{monto}</Typography>
      {
        gastos.length < 1 &&
        <Typography variant="h2" sx={{margin:'20px 0'}} >No hay gastos</Typography>
        }
        {
          gastos.length > 0 &&
          gastos.map((gasto, index) => (
            <GastoItem valor={gasto.valor} descripcion={gasto.descripcion} key={index} index={index} />
          ))
        }
      </Box>
    </>
  );
};

export default ListaGastos;
