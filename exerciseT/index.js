function pi() {
    let result = BigInt(0);
    const precision = 10n ** 120n;
    let i = BigInt(0);
    let diff = BigInt(2);
    do {
        diff = result;
        result += ((-1n) ** i * 4n) * (precision) / ((2n * i + 3n) ** 3n - (2n * i+ 3n));
        diff = result - diff;
        if (diff < 0n ) {
            diff = -1n * diff;
        }
        i += 1n;
    } while (diff > 1n);
    result += 3n * (precision);
    result = result / (10n ** 20n);
    result = result.toString();
    piInt = result.slice(0, 1);
    piDec = result.slice(1, result.length);
    piNumber = piInt.concat(".", piDec);
    return piNumber;
}

const myPi = pi();
console.log(myPi);