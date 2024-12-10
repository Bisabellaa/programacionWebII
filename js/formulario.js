let datos = [];

function mostrarMensaje(texto){
    document.getElementById('mensaje').innerHTML = texto;
}

function agregar() {
    const nombre = document.getElementById('nombre').value;
    const raza = document.getElementById('raza').value;
    const consulta = document.getElementById('consulta').value;
    console.log(nombre);
    if(nombre && raza){
        datos.push({ nombre: nombre, raza: raza, consulta: consulta});
        mostrarMensaje(`Bienvenido al sistema tu mascota ${nombre} ${raza} esta registrada, tu consulta ${consulta} fue agregada correctamente`);
    } else {
        mostrarMensaje(`No se encontró a ${nombre} para modificar.`);
        }
}

function modificar(){
    const nombre = document.getElementById('nombre').value;
    const raza = document.getElementById('raza').value;

    const index = datos.findIndex(dato => dato.nombre === nombre);
    if (index !== -1) {
        datos[index].raza = raza;
        mostrarMensaje(`La raza de ${nombre} ha sido modificado a ${raza}.`);
    } else {
        mostrarMensaje(`No se encontró a ${nombre} para modificar.`);
    }

}

function eliminar(){
    const nombre = document.getElementById('nombre').value;

    const index = datos.findIndex(dato => dato.nombre === nombre);
    if (index !== -1) {
        datos.splice(index, 1);
        mostrarMensaje(`El registro de ${nombre} ha sido eliminado.`);
    } else {
        mostrarMensaje(`No se encontró a ${nombre} para eliminar.`);
    }
}

