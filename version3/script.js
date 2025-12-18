document.addEventListener('DOMContentLoaded', function () {
  // すべてのアイコンボタンを取得
  const icons = document.querySelectorAll('.garbage-icon');

  // 各ボタンにイベントリスナーを設定
  icons.forEach(icon => {
    icon.addEventListener('click', checkSeparation);
  });
});

function checkSeparation(event) {
  // クリックされたボタンの data-type 属性を取得
  const garbageType = event.currentTarget.dataset.type;
  const resultDiv = document.getElementById("result");

  let separationType = '';
  let message = '';

  // 大分市の分別区分と排出時の注意点
  switch (garbageType) {
    case "combustible":
      separationType = '① 燃やせるごみ';
      message = '生ごみは水分をよく切り、靴・カバンなどは燃やせるごみとして出してください。';
      break;
    case "incombustible":
      separationType = '② 燃やせないごみ';
      message = '割れたガラスや陶磁器、化粧品びんなどは燃やせないごみです。';
      break;
    case "resource_plastic":
      separationType = '③ 資源プラ (プラスチック製容器包装)';
      message = 'プラマークを確認し、汚れを落として出してください。';
      break;
    case "can_bottle":
      separationType = '⑧ 缶・びん';
      message = '中身をすすぎ、キャップやフタを外して出してください。';
      break;
    case "pet_bottle":
      separationType = '⑨ ペットボトル';
      message = 'キャップとラベルを外し、水洗いして出してください。';
      break;
    case "misc_paper":
      // 新聞類とその他紙類をまとめて表示（ステーションでは分けて排出）
      separationType = '⑩ 新聞類 / ⑪ その他紙類';
      message = '種類ごとにひもで束ねて出してください。';
      break;
    case "cloth":
      separationType = '⑫ 布類';
      message = '古着やタオルなどはひもで束ねて出してください。';
      break;
    case "spray_can":
      separationType = '④ スプレー缶類';
      message = '中身を使い切り、穴を開けずに出すこと。';
      break;
    case "lighter":
      separationType = '⑤ ライター類';
      message = '中身を使い切り、水をふくませて別の袋で出すこと。';
      break;
    case "fluorescent":
      separationType = '⑥ 蛍光管・電球・水銀体温計';
      message = '割れないように空き箱や紙などに包んで出してください。';
      break;
    case "battery":
      separationType = '⑦ 乾電池';
      message = '透明または半透明の袋に入れて出してください。';
      break;
    case "large":
      separationType = '⑬ 大型・一時的な多量ごみ';
      message = '収集ステーションでは出せません。市の施設への持ち込み、または戸別収集（有料）の事前申込が必要です。';
      break;
    default:
      separationType = '不明';
      message = '選択されたごみの分別区分を特定できませんでした。';
  }

  /* script.js の checkSeparation 関数内を以下のように書き換えます */

  // 結果の表示 (ボタンを追加)
  resultDiv.innerHTML = `
        <p style="color: #008000; font-size: 20px;">分別区分: 【${separationType}】</p>
        <p style="font-size: 16px; font-weight: normal;">（排出時の注意点） ${message}</p>
        <button id="close-result" style="
            margin-top: 15px;
            padding: 8px 20px;
            cursor: pointer;
            border: none;
            background-color: #333;
            color: white;
            border-radius: 5px;
        ">閉じる</button>
    `;

  // 追加したボタンに「結果を消す」イベントを設定
  document.getElementById("close-result").addEventListener('click', function () {
    resultDiv.innerHTML = ""; // 中身を空にする
    // 必要であればここで画面を上にスクロールさせる
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });}

/* script.js の最後に追加 */

// 表のデータ（大分市の例を参考に追加してください）
const garbageData = [
  { name: "アイロン", type: "燃やせないごみ", note: "30cm未満のもの" },
  { name: "アルミホイル", type: "燃やせるごみ", note: "汚れを落として" },
  { name: "おもちゃ（プラスチック）", type: "燃やせるごみ", note: "金属部分は外す" },
  { name: "コップ（ガラス）", type: "燃やせないごみ", note: "厚紙に包んで「キケン」と表記" },
  { name: "雑誌・カタログ", type: "その他紙類", note: "ひもで束ねる" },
  { name: "保冷剤", type: "燃やせるごみ", note: "そのまま出せます" },
  { name: "おもちゃ（プラスチック）", type: "燃やせるごみ", note: "金属部分は外す" },
  { name: "コップ（ガラス）", type: "燃やせないごみ", note: "厚紙に包んで「キケン」と表記" },
  { name: "雑誌・カタログ", type: "その他紙類", note: "ひもで束ねる" },
  { name: "保冷剤", type: "燃やせるごみ", note: "そのまま出せます" },
  { name: "おもちゃ（プラスチック）", type: "燃やせるごみ", note: "金属部分は外す" },
  { name: "コップ（ガラス）", type: "燃やせないごみ", note: "厚紙に包んで「キケン」と表記" },
  { name: "雑誌・カタログ", type: "その他紙類", note: "ひもで束ねる" },
];

function initTable() {
  const tableBody = document.getElementById('tableBody');
  const searchInput = document.getElementById('searchInput');

  // テーブルを表示する関数
  function renderTable(data) {
    tableBody.innerHTML = data.map(item => `
      <tr>
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item.note}</td>
      </tr>
    `).join('');
  }

  // 初期表示
  renderTable(garbageData);

  // 検索機能
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = garbageData.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.type.toLowerCase().includes(term)
    );
    renderTable(filtered);
  });
}

// DOM読み込み完了時にテーブルも初期化
document.addEventListener('DOMContentLoaded', initTable);