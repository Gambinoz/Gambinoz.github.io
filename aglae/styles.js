function comprar() {
    // Obtener el valor de la cantidad de manzanas y calcular el total
    var cantidad = document.getElementById("cantidad").value;
    var total = cantidad * 25; // Precio por manzana

    // Mostrar el total a pagar
    document.getElementById("total").textContent = "$" + total;

    // Esperar un momento antes de mostrar el mensaje de agradecimiento
    setTimeout(function() {
        alert("¡Gracias por comprar!");
    }, 1000); // 1000 milisegundos = 1 segundo

    // Evitar que el formulario se envíe
    return false;
}
