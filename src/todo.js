import "./styles.css";

const onClickAdd = () => {
  // alert();
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);
  // alert(inputText);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      deleteFromCompleteList(backButton.parentNode);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      // const backTarget = backButton.parentNode;
      // const text = backTarget.firstElementChild.innerText;
      createIncompleteList(text);

      // backTarget.textContent = null;
      // const li = document.createElement("li");
      // li.innerText = text;
      // backTarget.appendChild(li);
      // backTarget.appendChild(completeButton);
      // backTarget.appendChild(deleteButton);

      // const deleteTarget = backButton.parentNode;
      // document.getElementById("complete-list").removeChild(deleteTarget);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

    // console.log(addTarget);

    // console.log(text);
    // alert("完了");

    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  // console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
