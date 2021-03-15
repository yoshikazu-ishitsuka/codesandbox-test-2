import "./styles.css";

const onClickAdd = () => {
  // alert();
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);
  // alert(inputText);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  // console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
