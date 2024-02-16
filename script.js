function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 0; // The first number in Fibonacci sequence is 0
    } else if (n === 2) {
        return 1; // The second number in Fibonacci sequence is 1
    }

    let a = 0, b = 1, fib = 1;
    for (let i = 2; i < n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}
