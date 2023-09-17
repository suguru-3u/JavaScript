/**
 * Object
 * learning site
 * https://ja.javascript.info/object
 */

// Objectの作り方
let user = new Object();
user = {};

// 値の代入
type User = {
  name: string;
  age?: number;
  "likes birds": boolean;
};

const tsUser: User = {
  name: "John", // キー "name" に値 "John" が格納される
  age: 30, // キー "age" に値 30 が格納される
  "likes birds": true, // 複数語のプロパティ名は引用符で囲まなければなりません
};

// プロパティ、valueへのアクセス
console.log(tsUser.name);
console.log(tsUser.age);
// console.log(tsUser.["likes birds"]);

// プロパティの削除（あまり使わない？）
// 削除する際はプロパティをオプションをつけないと型エラーが起きる
delete tsUser.age;

function makeUser(name: string, age: number): User {
  return {
    name: name,
    age: age,
    "likes birds": true,
  };
}

let functionUser = makeUser("John", 30);
alert(functionUser.name); // John

// プロパティの名前はなんでもつけることができる
let obj = {
  0: "test", // same as "0": "test"
};

// 両方とも同じプロパティにアクセスします (数値の 0 は文字列の "0" に変換されます)
alert(obj["0"]); // test
alert(obj[0]); // test (同じプロパティ)

// オブジェクト存在チェック
// プロパティがあっても値がundefindの場合、falseが返却される
console.log(0 in obj); // true
console.log("name" in obj); // false

// オブジェクトのループ処理
// 実行される際は、順番通りには実行されない
for (const user in tsUser) {
  // オブジェクトプロパティの各キーに対して本体を実行
  console.log(user);
}
