function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;
}
function recuperarFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}

function recuperarSpan(idSpan, value) {
    let componente = document.getElementById(idSpan);
    componente.textContent = value;
}