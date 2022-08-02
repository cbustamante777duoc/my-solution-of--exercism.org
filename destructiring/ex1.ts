
(()=>{
    const person = {
        first: 'Elon',
        last: 'Musk',
        twitter: '@elonmusk',
        company: 'Space X'
    };
    
    function displayName(){
     let fullName = `${person.first} ${person.last}`
     return fullName;
    };

    console.log(displayName());//Elon Musk



    interface Pokemon{
        name: string;
        power: number;
        type: string;   
    }
    
    let pokemons:Pokemon[] = [
        { name: 'Bulbasaur', power: 20, type: 'plant' },
        { name: 'Charmander', power: 20, type: 'fire' },
        { name: 'Squirtle', power: 20, type: 'water' },
        { name: 'Pikachu', power: 20, type: 'electrico' },
        { name: 'Vulpix', power: 20, type: 'fire' },
    ];
    
    /**
     * function que devuelve un 20% si es electrico o fire sino devuelve
     * el 0.05 si es cualquier otro
     * @param pokemons array from pokemons
     * @returns name and morePower
     */

    const calculatePokemons = (pokemons) => {
    
        const total = pokemons.map(item => {
            let { power, type,name } = item;
            if (type == 'electrico' || type == 'fire'){
                item['morePower'] = power + (power * 0.20);
            }else{
                item['morePower'] = power + (power * 0.05);
            }
    
            return [name,item['morePower']] ;
        })
    
        return total;
    }
    
    calculatePokemons(pokemons)
    console.log(calculatePokemons(pokemons));

})()

