const fs = require('fs')

const citas = JSON.parse(fs.readFileSync('citas.json', "utf8"))

const registrar = (nombre, edad, animal, color, enfermedad) => {
    // const id = Math.floor(Math.random() * 1000)
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log("Por favor ingrese los datos solicitados")
        return 
    }
    citas.push({ nombre, edad, animal, color, enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log(citas)
}

const leer = () => { 
   console.log(citas)}

/* const actualizar = (nombre, edad, animal, color, enfermedad) => {
    const index = coleccion.findIndex(e => e.id === id) 
    citas[index] = { id, nombre, edad, animal, color, enfermedad }
    fs.writeFileSync('citas.json', JSON.stringify(citas))
        console.log(citas)
}

const borrar = (id) => {
    const index = citas.findIndex(e => e.id === id)
    citas.splice(index, 1)
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log(citas)
} */

module.exports = { registrar, leer }
