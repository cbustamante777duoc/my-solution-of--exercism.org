interface Jugador {
    nombre: string;
    posicion: string;
    altura:  number;
    salario: string;
}

const jugadores: Jugador[] =[
    {
        "nombre": "Jude Bellingham",
        "posicion": "Centrocampista",
        "altura": 1.85 ,
        "salario": "£342,000 por semana"
    },
    {
        "nombre": "Vinícius Júnior",
        "posicion": "Delantero",
        "altura": 1.76 ,
        "salario": "€240,385 por semana"
    },
    {
        "nombre": "Brahim Díaz",
        "posicion": "Delantero",
        "altura": 1.70 ,
        "salario": "€152,500 por semana"
    },
    {
        "nombre": "Arda Güler",
        "posicion": "Centrocampista",
        "altura": 1.75 ,
        "salario": "€5,200,000 por año"
    },
    {
        "nombre": "Rodrygo",
        "posicion": "Delantero",
        "altura": 1.74 ,
        "salario": "€240,385 por semana"
    },
    {
        "nombre": "Toni Kroos",
        "posicion": "Mediocampista",
        "altura": 1.83 ,
        "salario": "€11.7 millones por año"
    },
    {
        "nombre": "David Alaba",
        "posicion": "Defensor",
        "altura": 1.80 ,
        "salario": "€10.8 millones por año"
    },
    {
        "nombre": "Luka Modric",
        "posicion": "Mediocampista",
        "altura": 1.72,
        "salario": "€10.5 millones por año"
    },
    {
        "nombre": "Jude Bellingham",
        "posicion": "Mediocampista",
        "altura": 1.86 ,
        "salario": "€22.66 millones por año"
    },
    {
        "nombre": "Vinicius Junior",
        "posicion": "Delantero",
        "altura": 1.75 ,
        "salario": "€22.66 millones por año"
    },
    {
        "nombre": "Thibaut Courtois",
        "posicion": "Portero",
        "altura": 1.99 ,
        "salario": "€16.32 millones por año"
    },
    {
        "nombre": "Antonio Rüdiger",
        "posicion": "Defensor",
        "altura": 1.90 ,
        "salario": "€15.86 millones por año"
    },
    {
        "nombre": "Aurélien Tchouaméni",
        "posicion": "Mediocampista",
        "altura": 1.87 ,
        "salario": "€13.6 millones por año"
    },
    {
        "nombre": "Ferland Mendy",
        "posicion": "Defensor",
        "altura": 1.80 ,
        "salario": "€11.34 millones por año"
    },
    {
        "nombre": "Dani Ceballos",
        "posicion": "Mediocampista",
        "altura": 1.76 ,
        "salario": "€11.34 millones por año"
    },
    {
        "nombre": "Nacho Fernández",
        "posicion": "Defensa central",
        "altura": 1.80 ,
        "salario": "No disponible"
    },
    {
        "nombre": "Éder Militão",
        "posicion": "Defensa central",
        "altura": 1.86 ,
        "salario": "$7.386.160.487 anual"
    },
    {
        "nombre": "Kepa Arrizabalaga",
        "posicion": "Portero",
        "altura": 1.88 ,
        "salario": "No disponible"
    },
    {
        "nombre": "Joselu",
        "posicion": "Delantero centro",
        "altura": 1.91 ,
        "salario": "No disponible"
    }
]

//aceder al jugador 1
const jugador1 = jugadores[0]

/**
 * Returns the salary of the player with the given name from the list of players.
 *
 * @param {Jugador[]} jugadores - The list of players
 * @param {string} nombre - The name of the player to search for
 * @return {number | null} The salary of the player, or null if the player is not found
 */
function obtenerSalario(jugadores:Jugador[], nombre) {
    const jugador = jugadores.find(jugador => jugador.nombre === nombre);
    return jugador ? jugador.salario : null;
}

// Ahora puedes llamar a esta función pasándole tu lista de jugadores y el nombre del jugador
const salarioArda = obtenerSalario(jugadores, 'Arda Güler');


/**
 * Updates the salary of a player and returns an array of players with the specified name.
 *
 * @param {Array} jugadores - The array of player objects
 * @param {string} nombre - The name of the player whose salary needs to be updated
 * @param {number} nuevoSalario - The new salary to be assigned to the player
 * @return {Array} An array of player objects with the specified name
 */
function actualizarSalario(jugadores:Jugador[], nombre, nuevoSalario) {
    const jugador = jugadores.find(jugador => jugador.nombre === nombre);
    if (jugador) {
        jugador.salario = nuevoSalario;
    }
    return jugadores.filter(jugador => jugador.nombre === nombre);
}

// Ahora puedes llamar a esta función pasándole tu lista de jugadores, el nombre del jugador y el nuevo salario
const viniTest = actualizarSalario(jugadores, 'Vinicius Junior', "€250,000");




// Agregar un nuevo jugador: Añade un nuevo jugador llamado “Lionel Messi” con posición “Delantero”, altura “1.70 metros” y salario “€500,000 por semana”.
const Lionel = {"nombre": "Lionel Messi", "posicion": "Delantero", "altura": 1.70 , "salario": "€500,000 ",}
jugadores.push(Lionel)

/**
 * Filters the array of players to only include defenders.
 *
 * @param {Jugador[]} jugadores - the array of players to filter
 * @return {Jugador[]} the array of defenders
 */
function filtrarDefensas(jugadores:Jugador[]) {
    return jugadores.filter(jugador => jugador.posicion === 'Defensor' || jugador.posicion === 'Defensa central');
}


const defensas = filtrarDefensas(jugadores);


/**
 * Sorts the array of players by their height.
 *
 * @param {Jugador[]} jugadores - The array of players to be sorted.
 * @return {Jugador[]} The sorted array of players.
 */
function ordenarJugadoresPorAltura(jugadores:Jugador[]) {
    return jugadores.sort((a, b) => a.altura - b.altura);
}

const jugadoresOrdenadosPorAltura = ordenarJugadoresPorAltura(jugadores);

jugadoresOrdenadosPorAltura.forEach(jugador => {
    console.log(jugador)
});


const posicionesOrdenadas = ['Portero', 'Defensa central','Defensor', 'Centrocampista', 'Mediocampista', 'Delantero', 'Delantero centro'];

/**
 * Sorts an array of players by their position.
 *
 * @param {Jugador[]} jugadores - array of players to be sorted
 * @return {Jugador[]} sorted array of players
 */
function ordenarJugadoresPorPosicion(jugadores:Jugador[]):Jugador[] {
    return jugadores.sort((a, b) => {
        return posicionesOrdenadas.indexOf(a.posicion) - posicionesOrdenadas.indexOf(b.posicion);
    });
}

// Ahora puedes llamar a esta función pasándole tu lista de jugadores
const jugadoresOrdenados = ordenarJugadoresPorPosicion(jugadores);


console.log(jugadores)

// Ordenar jugadores por altura: Crea una función que ordene los jugadores de mayor a menor altura.
// Buscar jugador por nombre: Crea una función que busque un jugador por su nombre.
// Calcular salario promedio: Crea una función que calcule el salario promedio de los jugadores.
// Jugador con el salario más alto: Encuentra al jugador con el salario más alto.
// Jugador con el salario más bajo: Encuentra al jugador con el salario más bajo.
// Convertir salarios a una moneda común: Crea una función que convierta todos los salarios a una moneda común (por ejemplo, euros).
// Calcular la altura promedio de los jugadores: Crea una función que calcule la altura promedio de los jugadores.
// Jugador más alto y más bajo: Encuentra al jugador más alto y al más bajo.
// Agrupar jugadores por posición: Crea una función que agrupe a los jugadores por su posición en el campo.
// Contar jugadores por posición: Crea una función que cuente cuántos jugadores hay en cada posición.
// Crear un equipo ideal: Crea una función que seleccione un equipo ideal basado en la posición y el salario.
// Filtrar jugadores con salario no disponible: Crea una función que filtre a los jugadores cuyo salario no está disponible.
// Actualizar la información del jugador: Crea una función que permita actualizar la información de un jugador.
// Agregar un nuevo jugador: Crea una función que permita agregar un nuevo jugador al array.

