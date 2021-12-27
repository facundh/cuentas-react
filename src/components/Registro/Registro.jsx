import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

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
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        mt={2}
        p={5}
        textAlign={"center"}
        fontWeight={"bold"}
        bgcolor={"lightgrey"}
      >
        {" "}
        Gastos{" "}
      </Typography>
      <Container maxWidth="xl">
          
        <Grid container columns={12} bgcolor={'red'} height={500} width={'auto'} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}>
          <Grid item xs={5}>
            <Item>Gasto</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Monto</Item>
          </Grid>

          <Button variant="contained" style={{ marginTop:50}} color="success">Devolver Pago</Button>
        </Grid>
      </Container>
    </>
  );
};

export default Registro;
