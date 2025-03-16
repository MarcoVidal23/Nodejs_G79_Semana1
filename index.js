const fs = require("fs");

const { lectura, registrar } = require("./operaciones.js");

const [orden, nombre,edad,animal,color,enfermedad] = process.argv.slice(2);
const ARCH = "citas.json";



if (orden === 'lectura') {
    const data = lectura(ARCH);
    console.log(data)
} else if (orden === 'registrar') {
    if (!nombre || !edad || !animal || !color || !enfermedad){
      return console.log("Ingresa nombre edad animal color y enfermedad ");
    }
    const data = lectura(ARCH)
  const newCita = {
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
    };
    data.push(newCita);
    registrar(ARCH, data);
    return (console.log(data));
}