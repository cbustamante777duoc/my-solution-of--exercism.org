(() => {


    //reference
    //https://www.hackerrank.com/challenges/angry-professor/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=30-day-campaign

    // Un profesor de Matemática Discreta tiene una clase de estudiantes. Frustrado por su falta de disciplina, el profesor decide cancelar la clase si hay menos de un número determinado de estudiantes presentes cuando comienza la clase. Los tiempos de llegada van desde puntual () llegar tarde ().
    // Dada la hora de llegada de cada estudiante y un número umbral de asistentes, determine si la clase se cancela.
    // variable
    // n = 5
    // k = 3
    // a = [1, 0, 0, 1, 1]

    /**
 * A function that determines if the class is canceled based on the input threshold and student arrival times.
 *
 * @param {number} k - The threshold number of students needed for the class not to be canceled.
 * @param {number[]} a - An array representing the student arrival times (-1 for late, 0 for on time).
 * @return {string} Returns "YES" if the class is canceled, "NO" otherwise.
 */
    function angryProfessor(k, a) {
        // Write your code here
        let presentStudents = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] <= 1) {
                presentStudents++;
            }

        }

        if (k > presentStudents) {
            return "YES"
        } else {
            return "NO"
        }

    }



    /**
    test('k > presentStudents, expecting "YES"', () => {
      const k = 3;
      const a = [0, -1, -1, -1, -1, -1];
      expect(angryProfessor(k, a)).toBe("YES");
    });
    
    test('k <= presentStudents, expecting "NO"', () => {
      const k = 4;
      const a = [0, -1, -1, 0, -1, -1];
      expect(angryProfessor(k, a)).toBe("NO");
    });
    **/
})()