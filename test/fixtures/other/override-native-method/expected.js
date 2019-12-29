console.log("%c%s%s", "padding:20px; background:green;color:#fff;font-weight:bold", "/test/fixtures/other/override-native-method/actual.js (1:0):", 1);

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
    console.log("%c%s%s%s%s%s%s%s%s", "padding: 4px; background:blue;", "/test/fixtures/other/override-native-method/actual.js (14:8):", 'aaaa', 111, 222, 333, 444, 555, 666);
    console.success('bbb', 432, 23423, 23423, 2);
  }

}