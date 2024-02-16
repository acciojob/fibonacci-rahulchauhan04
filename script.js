function fibonacci(num) {
    if (num <= 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    let a = 0, b = 1, fib = 1;
    for (let i = 2; i < num; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}

module.exports = fibonacci;
