function example(n) {
    for (let i = 0; i < 3 * n; i++) {
        console.log("Hello");
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; i < n; i++) {
            console.log("Hello");
        }
    }

    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

example(2);
