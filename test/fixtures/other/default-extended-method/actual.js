console.log(1);

function fun() {
    console.warn(333);
    console.error(2);
}

class Aaa {
    m() {
        console.time();
        return "mm";
    }
    m2() {
        console.red('red');
        console.blue('blue', 2);
        console.orange('orange',2, 3333);
        console.green(4444);
        console.bgRed('bgRed');
        console.bgBlue(666666);
        console.bgOrange(77777);
        console.bgGreen('green', 'bg', 'color');
    }
}
