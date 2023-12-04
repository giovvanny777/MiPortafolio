function formulario() {
    var nombre = document.getElementById('nombre').value;
    var email_form = document.getElementById('email_form').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;

    console.log('Nombre:', nombre);
    console.log('Correo:', email_form);
    console.log('Teléfono:', telefono);
    console.log('Mensaje:', mensaje);
}