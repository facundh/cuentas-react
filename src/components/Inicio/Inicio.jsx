import React from "react";
import { CuentasConsumer } from "../../context/CuentasProvider";
import {
  Button,
  Container,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { border, Box } from "@mui/system";
import {blue} from '@mui/material/colors'

const Inicio = () => {
  const { modificarMonto } = CuentasConsumer();

  const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(blue[400]),
    backgroundColor:blue[400],
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,

    '&:hover':{
      boxShadow:'0 0 0 0.2rem rgba(0,123,255,.5)',
      color:'white'
    }
  }));

  
 

  return (
    <>
      <Container maxWidth="sx">
        <Box
          component="form"
          sx={{
            bgcolor: "lightgray",
            height: "600px",
            m: 4,
            p: 3,
            borderRadius: 5,
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
            variant="filled"
            label="Monto"
            sx={{ display: "flex", mb: 5 }}
          />
          <Stack>
          <ColorButton
            variant="contained"
          >
            Ingresar Monto
          </ColorButton>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Inicio;
