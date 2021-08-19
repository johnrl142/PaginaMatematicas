//funciones helpers

function esPar(numerito){
    return (numerito % 2 === 0);
}


function calcularMediaAritmetica3() {

    const entradaDatos = document.getElementById("inputSalario");
    const datosValue = entradaDatos.value;

    let arrayValor = Array.from(datosValue.split(", "), Number);


    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
const promedioLista = sumaLista / lista.length;
return promedioLista;       
}

//calculadora de mediana

function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica3([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//mediana Genearal
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function(salaryA, salaryB)  {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted);

//mediana top 10%

const spliceStar = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStar;   

const salariosColTop10 = salarioColSorted.splice(spliceStar, spliceCount);


const medianaColTop10 = medianaSalarios(salariosColTop10);


console.log(
    medianaGeneralCol,
    medianaColTop10,
    );