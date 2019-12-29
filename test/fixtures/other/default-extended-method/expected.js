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
    console.log("%c%s%s", "color:red;", "/test/fixtures/other/default-extended-method/actual.js (14:8):", 'red');
    console.log("%c%s%s%s", "color:blue;", "/test/fixtures/other/default-extended-method/actual.js (15:8):", 'blue', 2);
    console.log("%c%s%s%s%s", "color:orange", "/test/fixtures/other/default-extended-method/actual.js (16:8):", 'orange', 2, 3333);
    console.log("%c%s%s", "color:green", "/test/fixtures/other/default-extended-method/actual.js (17:8):", 4444);
    console.log("%c%s%s", "padding: 4px; background:red;", "/test/fixtures/other/default-extended-method/actual.js (18:8):", 'bgRed');
    console.log("%c%s%s", "padding: 4px; background:blue;", "/test/fixtures/other/default-extended-method/actual.js (19:8):", 666666);
    console.log("%c%s%s", "padding: 4px; background: orange", "/test/fixtures/other/default-extended-method/actual.js (20:8):", 77777);
    console.log("%c%s%s%s%s", "padding: 4px; background: green", "/test/fixtures/other/default-extended-method/actual.js (21:8):", 'green', 'bg', 'color');
  }

}