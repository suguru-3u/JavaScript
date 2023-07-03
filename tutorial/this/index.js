/**
 * javaScriptのthisについて学習
 * 参考サイト：https://tcd-theme.com/2021/12/javascript-this.html
 * 参考サイト：https://qiita.com/mejileben/items/69e5facdb60781927929
 */

// 基本的に、thisは「.」 の前についているオブジェクトを指し
// 「.」 が省略された場合はグローバルオブジェクトになります (non-strict モード時)。 strict モードでは undefined になる。

// この関数を実行するとグローバルオブジェクトを参照している
function test() {
  console.log(this); // => Window {frames: Window, postMessage: ƒ, blur: ƒ, f...
}

function test() {
  console.log(this);
}
var obj = {};
obj.test = test;

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

// アロー関数内のthisの場合は、関数が定義された時点で値が決まります。
// アロー関数内のthisは、呼び出し元に関わらず、アロー関数の外側で定義されたthisの値が参照されています。
// このような振る舞いをすることから、thisの値を束縛するという表現がされることがあります。
// thisの値が固定化されているため、より直感的です。
