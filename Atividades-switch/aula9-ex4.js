let x = 0;
while (x < 20) {
    x = x + 1;
    if (x === 13) {
        continue;
    }
    console.log(x);
}