/*
  const,let等の変数宣言
*/
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// オブジェクトにするとその中身は変更可能;
// constで定義したオブジェクトはプロパティの変更が可能;
// const val4 = {
//   name: "yos",
//   age: 28
// };
// // console.log(val4);
// val4.name = "jak";
// val4.address = "Ibaraki";
// // console.log(val4);
// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 文字列の中にjsの変数を埋め込める
 */
// const name = "よすぃ";
// const age = 28;
// // 「私の名前はよすぃです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// // console.log(message1);

// //　テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 *　アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "jake",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// // 順番で設定される
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("jake");

// /**
//  * スプレッド構文　...
//  * 順番に処理する
//  */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // １つにまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // =だと値を変更したら両方とも変更される
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

// /**
//  * mapやfilterを使った配列の処理
//  * これもいつも通りES2015から
//  * これによってfor文をあまり使わなくなった
//  */
// const nameArr = ["田中", "山田", "よす"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// // １.新しい配列を作成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// // 2.配列をループして処理をする (順番がほしいときはindexを使う)
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // ある条件に一致したものだけ返却して新しい配列を生成する
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0; //ここに条件式
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "よす") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ？ 条件がtrueの時 ： 条件がfalseの時
const val1 = 1 < 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;
// 金額などを3桁区切りで表示してくれる関数(数値だけ)
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
};
console.log(checkSum(50, 40));
