(() => {


    interface heroe {
        nombre: string;
        artesMarciales: ArtesMarciales[];
    }

    enum ArtesMarciales {
        Lucha,
        Agujas,
        Escarcha,
        Regeneracion,
        Psiquicos,
        RayosX,
        liderazgo
    }

    const DEADPOOL: heroe = {
        nombre: 'Deadpool',
        artesMarciales: [ArtesMarciales.Psiquicos, ArtesMarciales.RayosX]
    }

    const Venom: heroe = {
        nombre: 'Venom',
        artesMarciales: [ArtesMarciales.Psiquicos, ArtesMarciales.RayosX]
    }

    const spiderman: heroe = {
        nombre: 'Spiderman',
        artesMarciales: [ArtesMarciales.Agujas, ArtesMarciales.Lucha]
    }

    const wolverine: heroe = {
        nombre: 'Wolverine',
        artesMarciales: [ArtesMarciales.Regeneracion, ArtesMarciales.Lucha]
    }

    const ciclope: heroe = {
        nombre: 'Ciclope',
        artesMarciales: [ArtesMarciales.liderazgo, ArtesMarciales.RayosX]
    }

    const heroes: heroe[] = [DEADPOOL, spiderman, wolverine, ciclope, Venom];

    // Crea una expresión regular para evitar agregar a venom
    const filtro = (heroe: heroe): boolean => heroe.nombre.match(/Venom/) === null;

    // Create a regular expression to avoid adding Venom
    const filterHero = (hero: heroe): boolean => !hero.nombre.match(/Venom/);

    // Agrega los héroes al array solo si no coinciden con la expresión regular
    const heroes2 = heroes.filter(filterHero);

    // Combina los resultados de la función map() en una sola cadena
    const nombres = heroes2.reduce((acumulador: string, heroe: heroe) => `${acumulador} ${heroe.nombre} ${heroe.artesMarciales}`, '');

    //ordena los heroes alfabeticamente
    heroes2.sort((a: heroe, b: heroe) => a.nombre.localeCompare(b.nombre));

    for (const item of heroes2) {
        console.log(item.nombre);
    }




})()