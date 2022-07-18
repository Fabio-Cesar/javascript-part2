const primos = [];
let isPrimo = true;

for (i=2; i<100000; i+=2) {
    for (j of primos) {
        if (j <= Math.sqrt(i)) {
            if (i % j === 0) {
                isPrimo = false;
                break;
            }
        }
    }
    if (isPrimo) {
        primos.push(i);
    }
    if (i === 2) {
        i -= 1;
    }
    isPrimo = true;
}

console.log(primos);