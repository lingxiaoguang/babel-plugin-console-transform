console.log(1);

function fun() {
  console.error(2);
}

class Aaa {
  m() {
    console.time();
    return "mm";
  }

  m2() {
    console.timeEnd();
    console.log("%c%s%s%s%s%s%s%s%s", "padding: 4px; background:blue;", "/test/fixtures/other/extended-method-by-user/actual.js (14:8):", 'aaaa', 111, 222, 333, 444, 555, 666);
    console.log("%c%s%s%s%s%s%s", "padding:20px; background:green;color:#fff;font-weight:bold", "/test/fixtures/other/extended-method-by-user/actual.js (15:8):", 'bbb', 432, 23423, 23423, 2);
  }

}