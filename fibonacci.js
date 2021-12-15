// Rabbit problem # 7


const fibonacci = (n) => {

    // Fibonnacci example 1, 1, 2, 3, 5, 8, 13

    //  f = f(n-1) + f(n-2)

    // Base case
    if (n < 2) {
        return n;
    }

    // Recursive case
    // 4 3
    return  Fibonacci ( n  -  1 )  +  Fibonacci ( n  -  2 ) ;
}

// Branch with 6
// branch of 5 and branch 4

// Branch with 5
// branch of 4 and branch 3


fibonacci(7);               