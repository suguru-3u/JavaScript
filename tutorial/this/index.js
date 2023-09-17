/**
 * javaScriptのthisについて学習
 * 参考サイト：https://tcd-theme.com/2021/12/javascript-this.html
 * 参考サイト：https://qiita.com/mejileben/items/69e5facdb60781927929
 */

// 基本的に、thisは「.」 の前についているオブジェクトを指し
// 「.」 が省略された場合はグローバルオブジェクトになる (non-strict モード時)。 strict モードでは undefined になる。

// この関数を実行するとグローバルオブジェクトを参照している
function test() {
  console.log(this); // => Window {frames: Window, postMessage: ƒ, blur: ƒ, f...
}

function test2() {
  console.log(this);
}
var obj = {};
obj.test = test2;

//　「.」がついているので、objオブジェクトを参照している
obj.test(); // => {test: ƒ}

// this前の「.」testオブジェクトを参照している
const test = {
  id: 1,
  name: "田中太郎",
  user: function () {
    console.log(this);
  },
};
test.user();
// {id: 1, name: '田中太郎', user: ƒ}

// コンストラクタ
// インスタンスのプロパティを参照している
const test = {
  id: 1,
  name: "田中太郎",
  user: function () {
    console.log(this);
  },
};
test.user();
// {id: 1, name: '田中太郎', user: ƒ}

// アロー関数
this.val = "global";

const test2 = () => {
  console.log(this.val);
};

const obj = {
  val: "object",
  func: test2,
};
obj.func();
// global

// アロー関数内のthisの場合は、関数が定義された時点で値が決待ってしまう。
// アロー関数内のthisは、呼び出し元に関わらず、アロー関数の外側で定義されたthisの値が参照されています。
// このような振る舞いをすることから、thisの値を束縛するという表現がされることがあります。
// thisの値が固定化されているため、より直感的です。

// call/applyメソッドは、通常関数の呼び出し先によって決定されるthisの値を明示的に指定することができる
// それにより、関数やメソッドを別のオブジェクトに割り当てることができる！
// (callメソッドは、第二引数以降をそのまま指定するのに対し、applyメソッドは、第二引数を配列に入れて指定する点が異なる。)
// 参考サイト：https://note.affi-sapo-sv.com/js-call-apply.php#title5

let user = { name: "太郎" };

function add(a, b) {
  return `${this.name}のスコアの合計は${a + b}です`;
}

// パターン1（第一引数にthisの参照先の値を指定する）
console.log(add.call(user, 10, 20)); // "太郎のスコアの合計は30です"
console.log(add.apply(user, [30, 40])); // "太郎のスコアの合計は70です"

// パターン2（第一引数にthisの参照先の値を指定する）
let score1 = { a: 10, b: 20 };
let score2 = [30, 40];
console.log(add.call(user, score1.a, score1.b)); // "太郎のスコアの合計は30です"
console.log(add.apply(user, score2)); // "太郎のスコアの合計は70です"
