export const inmuebles =
    [{ 'año': 2000, 'metros': 100, 'habitaciones': 3, 'garaje': true, 'zona': 'A' },
    { 'año': 2012, 'metros': 60, 'habitaciones': 2, 'garaje': true, 'zona': 'B' },
    { 'año': 1980, 'metros': 120, 'habitaciones': 4, 'garaje': false, 'zona': 'A' },
    { 'año': 2005, 'metros': 75, 'habitaciones': 3, 'garaje': true, 'zona': 'B' },
    { 'año': 2015, 'metros': 90, 'habitaciones': 2, 'garaje': false, 'zona': 'A' }]



//crear un funcion que filter por zona
//validar que filtre solo letra que sean A o B 
//mandar mensaje de error en caso que sea contrario

const funFilterZone = (filtrar: string) => {

    const toupperFiltrar = filtrar.toUpperCase();

    if (toupperFiltrar == 'A' || toupperFiltrar == 'B') {

        const filtrarPorZona = inmuebles.filter((item) => item.zona === toupperFiltrar);
        return filtrarPorZona;
    }
    else {
        return 'debe ser la letra A o B ';
    }
}

// console.log(funFilterZone('a'));

// [ { 'año': 2000,metros: 100,habitaciones: 3,garaje: true, zona: 'A' },
//   { 'año': 1980,metros: 120,habitaciones: 4,garaje: false,zona: 'A' },
//   { 'año': 2015,metros: 90,habitaciones: 2,garaje: false,zona: 'A' } ]

//funcion que multiple los metros de la habitacion
//validar que sean mayor a 1
//validar que no sean letra
//validar que no sean boolean
//validar que no sean object
const funmultiplicarMetros = (numero: number) => {

    if (numero < 1) {
        return 'debe ser mayor a 1';
    }

    if (typeof (numero) == 'string' || typeof (numero) == 'boolean' ||
        typeof (numero) == 'object') {

        return 'debe ser un numero'
    }

    const multiplicarMetros = inmuebles.map((item) => item.metros * numero)
    return multiplicarMetros;
}

console.log(funmultiplicarMetros(2));
//[ 200, 120, 240, 150, 180 ]
