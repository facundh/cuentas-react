import React, { useState } from "react";

import {
  Button,
  Container,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { border, Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import { CuentasConsumer } from "../../context/CuentasProvider";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[400]),
  backgroundColor: blue[400],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 10,
  paddingBottom: 10,
  

  "&:hover": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    color: "white",
  },
}));
const Inicio = () => {
  const [inicial, setInicial] = useState(0);
  const {monto, modificarMonto} = CuentasConsumer();

  console.log(monto)
  const handleClick = () => {
      modificarMonto(inicial)
  }

  return (
    <>
      <Container maxWidth="sx">
        <Box
          component="form"
          sx={{
            bgcolor: "lightgray",
            height: "600px",
            mx: "auto",
            my: "40px",
            p: 3,
            borderRadius: 5,
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{ mb: 10, p: 2 }}
            border={border}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={5}
          >
            {" "}
            Bienvenido, ingresa tu monto
          </Typography>
          <TextField
            type="number"
            variant="filled"
            label="Monto"
            sx={{ display: "flex", mb: 5 }}
            onChange={(e) => setInicial(e.target.value)}
          />
          <Stack>
            <ColorButton variant="contained" onClick={ handleClick   }>Ingresar Monto</ColorButton>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Inicio;
