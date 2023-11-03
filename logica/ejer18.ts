(() => {


    interface Imovies {
        title: string;
        director: string;
        year: number;
        watched: boolean;
    }

    const movies: Imovies[] = [
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            year: 1972,
            watched: false
        },
        {
            title: "Lord of the rings",
            director: "Peter Jackson",
            year: 2001,
            watched: true
        },
        {
            title: "Equilibrium",
            director: "Kurt Wimmer",
            year: 2002,
            watched: true
        },
        {
            title: "Matrix",
            director: "Wachowski &. Wachowski",
            year: 1999,
            watched: true
        },
        {
            title: "Matrix reloaded",
            director: "Wachowski &. Wachowski",
            year: 2003,
            watched: true
        },
    ]


    /**
    * This function iterates over the movies array and returns a string
    * containing the title and year of all watched movies.
    *
    * @return {string} - A string containing the title and year of watched movies.
    */
    function moviesFunction() {
        let result = "";
        for (const iterator of movies) {
            if (iterator.watched === true) {
                result += iterator.title + " - " + iterator.year + "\n";

            } else {
                result += "you must to watch: " + iterator.title + " - " + iterator.year + "\n";
            }
        }
        return result;
    }

    
    /**
    * This function iterates over the movies array and returns a string
    * containing the title and year of all watched movies.
    *
    * @return {string} - A string containing the title and year of watched movies.
    */
    function moviesFunction2() {
        let result = "";
        for (const movie of movies) {
            const watchedStr = movie.watched ? "" : "you must to watch: ";
            result += watchedStr + movie.title + " - " + movie.year + "\n";
        }
        return result;
    }

    let result = moviesFunction();
    let result2 = moviesFunction2()
    console.log(moviesFunction2());
    console.log(result);
    // Lord of the rings - 2001 
    // Equilibrium - 2002 
    // Matrix - 1999 
    // Matrix reloaded - 2003 

})()