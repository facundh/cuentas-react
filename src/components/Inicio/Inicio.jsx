import React from "react";
import { CuentasConsumer } from "../../context/CuentasProvider";
import {  Button, Container, Input, InputLabel, TextField, Typography, } from "@mui/material";
import { border, Box } from "@mui/system";
import { useState } from "react";


const Inicio = () => {

    const { modificarMonto } = CuentasConsumer();

    const montoAgregado = () => {
        modificarMonto()
    }

  return (
    <>
      <Container maxWidth="sx">
        <Box
        component='form'
        sx={{ bgcolor: '#70c2eec6', height: '100vh', m:4, p:3, borderRadius:5 }} >
                <Typography variant="h3" component='div' sx={{mb:10,  p:2}} border={ border } > Bienvenido, ingresa tu monto</Typography>
                <TextField variant="filled" label="Monto" sx={{display:'flex', mb:5}}/>
                <Button variant="contained" sx={{display:'flex', alignItems:'center',justifyContent:'center', alignSelf:'center'}} onClick={montoAgregado}>Ingresar Monto</Button>
        </Box>
      </Container>
    </>
  );
};

export default Inicio;
