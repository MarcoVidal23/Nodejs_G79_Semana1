const fs = require("fs");

const lectura = () => {
  const leer = fs.readFileSync("citas.json", "utf-8");
  const citas = JSON.parse(leer);
  return citas;
};

const registrar = (ARCH,datos) =>{
 fs.writeFileSync(ARCH, JSON.stringify(datos, null, 2), "utf-8");
}

module.exports = { lectura, registrar };
