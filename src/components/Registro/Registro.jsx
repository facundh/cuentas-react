import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Button, Container, Typography } from "@mui/material";
import FormularioGastos from "../FormularioGastos/FormularioGastos";
import ListaGastos from "../ListaGastos/ListaGastos";
import { CuentasConsumer } from "../../context/CuentasProvider";

const Registro = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
    margin: 50,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    backgroundColor: "lightblue",
  }));

  const {monto} = CuentasConsumer();
  console.log(monto)
  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography
          variant="h3"
          component="div"
          m={"auto"}
          mt={2}
          mb={3}
          p={5}
          textAlign={"center"}
          fontWeight={"bold"}
          borderRadius={5}
          className="gradient"
        >
          {" "}
          Administrador de Gastos{" "}
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Grid
          container
          columns={12}
          bgcolor={"lightgrey"}
          height={500}
          width={"auto"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          borderRadius={5}
        >
          <Grid item xs={12} lg={6}>
            <FormularioGastos />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ListaGastos />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Registro;
