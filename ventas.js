const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    return comision;
}

function validarNumero(input, idError) {
    const valor = input.value.trim();
    const error = document.getElementById(idError);

    // limpiar error previo
    error.textContent = "";

    // No vacío
    if (valor === "") {
        error.textContent = "Este campo es obligatorio";
        return;
    }

    // Solo números
    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números";
        return;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos permitidos";
        return;
    }
}

function calcular() {

    let salarioBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let salarioTotal = salarioBase + comision;

    document.getElementById("spSueldoBase").textContent = salarioBase.toFixed(2);
    document.getElementById("spComision").textContent = comision.toFixed(2);
    document.getElementById("spTotal").textContent = salarioTotal.toFixed(2);
}   