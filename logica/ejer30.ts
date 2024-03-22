(() => {


    /**
 * Convert the input time from 12-hour AM/PM format to 24-hour format.
 *
 * @param {string} s - the input time in 12-hour format
 * @return {string} the time in 24-hour format
 */

    function timeConversion(s: string) {

        const letras = s.split(':')
        let hours = parseInt(letras[0], 10);
        const minutes = letras[1]
        const second = letras[2]

        if (second.substring(2) === 'PM') {
            if (hours !== 12) {
                hours += 12
            }
        }

        if (second.substring(2) === 'AM') {

            if (hours === 12) {
                hours = 0
            }

        }

        return hours.toString().padStart(2, '0') + ':' + minutes + ':' + second.substring(0, 2)
    }

    console.log(timeConversion('07:05:45AM'))




})()