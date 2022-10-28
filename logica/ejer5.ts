(() => {

    /*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 * */


    for (let index = 0; index < 100; index++) {

        let multiplo3 = index % 3 == 0; 
        let multiplo5 = index % 5 == 0; 

        if (multiplo3) {
            console.log(index + ') fizz');
        }

        if (multiplo5) {
            console.log(index +') buzz');
        }

        if (multiplo3 && multiplo5) {
            console.log(index+ ') fizzbuzz');
        }

    }


})()