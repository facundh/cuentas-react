import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Button, Container, Typography } from "@mui/material";


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
    <Box
     display={"flex"}
     alignItems={"center"}
     justifyContent={"center"}>

      <Typography
        variant="h3"
        component="div"
        m={"auto"}
        mt={2}
        mb={3}
        p={5}
        textAlign={"center"}
        fontWeight={"bold"}
        bgcolor={"red"}
        width={400}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={5}
      >
        {" "}
        Gastos{" "}
      </Typography>
      <Typography
        variant="h3"
        component="div"
        m={"auto"}
        mt={2}
        mb={3}
        p={5}
        textAlign={"center"}
        fontWeight={"bold"}
        bgcolor={"lightblue"}
        width={400}
        borderRadius={5}
      >
        {" "}
        Total{" "}
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
          <Grid item xs={5}>
            <Item>Gasto</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Monto</Item>
          </Grid>
          <Button
            variant="contained"
            style={{ marginTop: 60 }}
            color="success"
            size="large"
          >
            Devolver Pago
          </Button>
          <Grid item xs={5}>
            <Item>Gasto</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Monto</Item>
          </Grid>
          <Button
            variant="contained"
            style={{ marginTop: 60 }}
            color="success"
            size="large"
          >
            Devolver Pago
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Registro;
