function comprar() {
    var cantidad = document.getElementById("cantidad").value;
    var total = cantidad * 25;
    document.getElementById("total").textContent = "$" + total;
    setTimeout(function() {
        alert("¡Gracias por comprar!");
    }, 1000);
    return false;}
