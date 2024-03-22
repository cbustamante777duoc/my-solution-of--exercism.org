{
    const jugadores: Jugador[] = [
        {
            "nombre": "Lionel Messi",
            "equipo": "PSG",
            "pais": "Argentina",
            "posicion": "Delantero",
            "edad": 35,
            "altura": 1.70
        },
        {
            "nombre": "Kylian Mbappé",
            "equipo": "PSG",
            "pais": "Francia",
            "posicion": "Delantero",
            "edad": 24,
            "altura": 1.78
        },
        {
            "nombre": "Erling Haaland",
            "equipo": "Manchester City",
            "pais": "Noruega",
            "posicion": "Delantero",
            "edad": 22,
            "altura": 1.94
        },
        {
            "nombre": "Kevin De Bruyne",
            "equipo": "Manchester City",
            "pais": "Bélgica",
            "posicion": "Mediocampista",
            "edad": 31,
            "altura": 1.81
        },
        {
            "nombre": "Robert Lewandowski",
            "equipo": "Bayern Munich",
            "pais": "Polonia",
            "posicion": "Delantero",
            "edad": 34,
            "altura": 1.84
        },
        {
            "nombre": "Mohamed Salah",
            "equipo": "Liverpool",
            "pais": "Egipto",
            "posicion": "Delantero",
            "edad": 30,
            "altura": 1.75
        },
        {
            "nombre": "Karim Benzema",
            "equipo": "Real Madrid",
            "pais": "Francia",
            "posicion": "Delantero",
            "edad": 35,
            "altura": 1.87
        },
        {
            "nombre": "Cristiano Ronaldo",
            "equipo": "Al-Nassr",
            "pais": "Portugal",
            "posicion": "Delantero",
            "edad": 37,
            "altura": 1.87
        },
        {
            "nombre": "Virgil van Dijk",
            "equipo": "Liverpool",
            "pais": "Países Bajos",
            "posicion": "Defensa",
            "edad": 31,
            "altura": 1.93
        }
    ]

    interface Jugador {
        nombre: string;
        equipo: string;
        pais: string;
        posicion: string;
        edad: number;
        altura: number;
    }

    function ordenarJugadores(jugadores: Jugador[]): Jugador[] {
        // Ordenar por altura
        jugadores.sort((jugador1, jugador2) => jugador1.altura - jugador2.altura);

        // Ordenar alfabéticamente por nombre
        jugadores.sort((jugador1, jugador2) => jugador1.nombre.localeCompare(jugador2.nombre));

        return jugadores;
    }


    const jugadoresOrdenados = ordenarJugadores(jugadores);

    console.log(jugadoresOrdenados);

    function obtenerJugadoresEuropeos(jugadores: Jugador[]): Jugador[] {
        return jugadores.filter(jugador => jugador.pais === "España" || jugador.pais === "Francia" || jugador.pais === "Portugal" || jugador.pais === "Bélgica" || jugador.pais === "Italia");
    }

    function sumarEdades(jugadores: Jugador[]): number {
        return jugadores.reduce((sumaEdades, jugador) => sumaEdades + jugador.edad, 0);
    }

    const jugadoresEuropeos = obtenerJugadoresEuropeos(jugadores);

    console.log(jugadoresEuropeos);

    const sumaEdades = sumarEdades(jugadores);

    console.log(sumaEdades);

}
