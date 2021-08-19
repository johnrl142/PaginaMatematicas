
function calcularMediaAritmetica1() {
//     // let sumaLista = 0;
//     // for (let i = 0; i < lista.length; i++) {
//     // sumaLista = sumaLista + lista[i];
//     // }

// Se captura los datos del html y se guardan los valores dentro de una variable
    const entradaDatos = document.getElementById("inputPromedio");
    const datosValue = entradaDatos.value;

//   console.log(datosValue);
//   Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayValor = Array.from(datosValue.split(", "), Number);

//   console.log(arrayValor);
//   Procedemos a realizar la suma total de los valores obtenidos en el html mediante el metodo reduce() de array

    const sumaLista = arrayValor.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / arrayValor.length;
    
    const mostrarResultados = document.getElementById("resultadoMedia");
    mostrarResultados.innerText = "El promedio es de: " + promedioLista;
}