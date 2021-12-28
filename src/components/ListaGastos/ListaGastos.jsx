import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GastoItem from "../GastoItem/GastoItem";

const ListaGastos = () => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'}  mx={'auto'} py={'40px'}>
      <Typography variant='h5' sx={{margin:'20px 0', backgroundColor:'lightblue', }} >Ingresos: 20000</Typography>
      <Typography variant='h5' sx={{margin:'20px 0', backgroundColor:'yellow', }} >Restante: 20000</Typography>
      <Typography variant="h2" sx={{margin:'20px 0'}} >No hay gastos</Typography>
        <GastoItem />
      </Box>
    </>
  );
};

export default ListaGastos;
