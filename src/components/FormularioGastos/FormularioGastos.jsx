import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CuentasConsumer } from "../../context/CuentasProvider";
import "./formulario.css";

const FormularioGastos = () => {
  const [consumo, setConsumo] = useState({
    descripcion: "",
    valor: 0,
  });
  const { descripcion, valor } = consumo;
  const { agregarGastos, resetarCuentas } = CuentasConsumer();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsumo({
      ...consumo,
      [name]: value,
    });
  };
  const handleClick = () => {
    if(valor <= 0){
      console.log('No se pude hacer la operacion')
      return
    }
    agregarGastos(consumo);
    setConsumo({
      descripcion: "",
      valor: 0,
    });
  };
  

  return (
    <>
      <form>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"50%"}
          mx={"auto"}
          py={"40px"}
        >
          <Typography variant="h4" sx={{ my: "20px" }}>
            Gastos
          </Typography>
          <TextField
            variant="standard"
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
            label="Nombre de Gasto"
            sx={{ my: "40px" }}
          />
          <TextField
            type="number"
            variant="standard"
            name="valor"
            value={valor}
            onChange={handleInputChange}
            label="Monto"
            sx={{ my: "40px" }}
          />
          <Button variant="contained" onClick={handleClick}>
            Agregar
          </Button>
          <Button variant="contained" sx={{my:2}} onClick={resetarCuentas}>
            restablecer App
          </Button>
        </Box>
      </form>
    </>
  );
};

export default FormularioGastos;
