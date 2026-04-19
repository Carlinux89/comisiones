const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    return comision;
}

function calcular() {
    let salarioBase = parseFloat(document.getElementById("txtSueldoBase").value);
    let numeroVentas = parseInt(document.getElementById("txtVentas").value);
    let precioProducto = parseFloat(document.getElementById("txtPrecio").value);
    let comision = calcularComision(numeroVentas, precioProducto);
    let salarioTotal = salarioBase + comision;
    document.getElementById("spSueldoBase").textContent = salarioBase.toFixed(2);
    document.getElementById("spComision").textContent = comision.toFixed(2);
    document.getElementById("spTotal").textContent = salarioTotal.toFixed(2);
}   