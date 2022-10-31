const valorTicket=200

function calcTotal() {
    var cant = document.getElementById("quantity").value
    var categoria = document.getElementById("categoria").value

    let total = 0
    if (categoria == 0) {
        total = cant*200
    }       else if (categoria == 1) {
                total = cant*valorTicket*.2 
    }       else if (categoria == 2) {
                total = cant*valorTicket*.5 
    }       else {
                total = cant*valorTicket*.85 
    }

    document.getElementById("total").innerHTML = `Total a pagar: $${total}`
}

function borrar() {
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("quantity").value = ""
    document.getElementById("categoria").value = categoria.value = 0
    document.getElementById("total").innerHTML = `Total a pagar: $`
}



function filterInteger(evt,input) {
    // ASCII https://elcodigoascii.com.ar/
    // ‘0′ = 48, ‘9′ = 57, ‘-’ = 45
    // Backspace = 8, Enter = 13, NULL = 0
    var key = window.Event ? evt.which : evt.keyCode;    
    var chark = String.fromCharCode(key);
    var tempValue = input.value+chark;
    if((key >= 48 && key <= 57) /* || key == 45 */) {
        return filter(tempValue);
    } else {
        return key == 8 || key == 13 || key == 0;
    }
}

function filter(__val__) {
    // /^-?[0-9]*$/; // positivos y negativos
    // /^[0-9]*$/; // solo positivos
    var preg = /^[0-9]*$/;
    return preg.test(__val__);
}

document.getElementById('quantity').addEventListener('keypress', function(evt) {
    if (filterInteger(evt, evt.target) === false) {
        evt.preventDefault();
    }
});