const fs = require("fs");

const { registrar, leer} = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === "leer") {
  leer();
}
/* if (operacion === "actualizar") {
    actualizar(id, nombre, edad, animal, color, enfermedad);
}

if (operacion === "borrar") {
  borrar(id);
} */
