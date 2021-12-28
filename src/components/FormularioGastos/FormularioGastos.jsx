import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './formulario.css';

const FormularioGastos = () => {
  return (
    <>
      <form>
        <Box display={'flex'} flexDirection={'column'} width={'50%'} mx={'auto'} py={'40px'} >
          <Typography variant="h4" sx={{margin:'20px 0'}} >Gastos</Typography>
          <TextField variant="standard" label="Nombre de Gasto" margin="40px 0"/>
          <TextField variant="standard" label="Monto" sx={{margin:"40px 0"}}/>
          <Button variant="contained">Agregar</Button>
        </Box>
      </form>
    </>
  );
};

export default FormularioGastos;
