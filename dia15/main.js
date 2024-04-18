let arrayA = [12,55,71,62,34,98,98,78,10,59]
let arrayB = [12,23,34,67,98,32,98,54,90,55]

function AcharNumerosEmComum(arrayUm, arrayDois) {
    let result = []
    let contadorResultado = 0

    for (let i = 0; i < arrayUm.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (arrayUm[i] == arrayDois[j]) {
                result[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return result
}

console.log(AcharNumerosEmComum(arrayA, arrayB))