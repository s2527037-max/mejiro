// 1. データの定義（親子構造）
const CATEGORIES = {
  // 最初の画面（トップ）
  top: [
    { label: "家庭ごみ", img: "1", next: "combustible" }, // 次の階層へ
    { label: "プラスチック製", img: "3", next: "plastic" },     // 次の階層へ
    { label: "紙類", img: "26", next: "paper" },     // 次の階層へ
    { label: "布類", img: "12", next: "cloth" },     // 次の階層へ
    { label: "缶・びん", img: "5", next: "can" },     // 次の階層へ
    { label: "ガラス類", img: "30", result: { title: "② 不燃物", msg: "ガラス、化粧品、薬、油のびん、果実酒をつけるガラスびん、哺乳瓶、鏡、灰皿、金魚鉢　※割れたガラスは紙に包んでください" } },
    { label: "金属類", img: "31", result: { title: "② 不燃物", msg: "なべ、やかん、フライパン、包丁、はさみ、カミソリ、ホッチキス、くぎ、画びょう、蚊取り線香の缶、入浴剤の缶、油の缶、金属製のふた類、針金のハンガー" } },
    { label: "磁器・陶器類", img: "32", result: { title: "② 不燃物", msg: "植木鉢、茶碗、湯飲み、皿、急須、コーヒーカップ、花瓶、壺" } },
    { label: "大型ごみ", img: "11", result: { title: "⑬ 大型ごみ・一時的多量ごみ", msg: "家具、カーペット、たたみ、自転車" } },
    { label: "ペットボトル", img: "6", result: { title: "⑨ ペットボトル", msg: "ペットボトル　※キャップとラベルを外し、水洗いして出してください" } },
    { label: "その他", img: "29", next: "others" },     // 次の階層へ
  ],

  // 「家庭ごみ」を押した後の選択肢
  combustible: [
    { label: "生ごみ", img: "1", result: { title: "① 可燃物", msg: "残飯、貝殻、卵の殻等。※水分をしっかり切ってください。" } },
    { label: "食用油", img: "14", result: { title: "① 可燃物", msg: "※食用油は凝固剤などで固めてください。" } },
    { label: "革類・ゴム類", img: "13", result: { title: "① 可燃物", msg: "革靴、カバン、財布、野球グローブ、ベルト、ランドセル、長靴、サッカーボール、ゴム手袋、ホース、サンダル、ブルーシート等。※金属部分はできるだけ取り除いてください。" } },
    { label: "科学製品", img: "15", result: { title: "① 可燃物", msg: "乾燥剤、保冷剤、カイロ" } },
    { label: "戻る", img: "back", isBack: true } // 最初の画面に戻るボタン
  ],
  // 「プラスチック製」を押した後の選択肢
  plastic: [
    { label: "容器包装（プラ）", img: "16", result: { title: "③ 資源プラ", msg: "カップ類、袋類、パック、トレイ類、ペットボトル等の蓋・ラベル、ボトル類、緩衝材・ネット類※汚れを落として乾かしてください。" } },
    { label: "プラスチック製品（商品そのもの）", img: "17", result: { title: "① 可燃物", msg: "ボールペン、DVD・CDケース、プラスチック製のハンガー、洗濯バサミ、タッパー、歯ブラシ、プランター、スポンジ、クリーニングの袋、結束バンド、ストロー、スプーン、フォーク　※商品そのものがプラスチック製の場合は可燃物です" } },
    
    { label: "戻る", img: "back", isBack: true }
  ],
  // 「紙類」を押した後の選択肢
  paper: [
    { label: "新聞紙", img: "7", result: { title: "⑩ 新聞", msg: "新聞紙   ひもで十文字に縛って出してください。" } },
    { label: "包装紙・紙袋類", img: "25", result: { title: "⑪ その他紙類", msg: "デパート等の包装紙、梱包紙、 食料品・日用品の紙袋" } },
    { label: "印刷物・筆記用紙", img: "26", result: { title: "⑪ その他紙類", msg: "コピー紙、メモ紙、パンフレット、名刺、葉書封筒、ポスター" } },
    { label: "紙箱・台紙類", img: "27", result: { title: "⑪ その他紙類", msg: "食料品・日用品の紙箱、台紙、紙芯等" } },
    { label: "本・雑誌類", img: "23", result: { title: "⑪ その他紙類", msg: "本、教科書、ノート、辞典、マンガ本" } },
    { label: "段ボール", img: "22", result: { title: "⑪ その他紙類", msg: "段ボール" } },
    { label: "紙パック", img: "21", result: { title: "⑪ その他紙類", msg: "牛乳・ジュースの紙パック" } },
    { label: "金属箔がついた紙", img: "20", result: { title: "① 可燃物", msg: "中が金属箔の酒パック等、カップめんのふた、タバコの銀紙、金箔入りの贈答箱" } },
    { label: "防水加工された紙", img: "19", result: { title: "① 可燃物", msg: "「紙マーク」があるカップめんの容器、紙製のヨーグルト容器、紙コップ、紙皿など" } },
    { label: "臭いの強い紙", img: "28", result: { title: "① 可燃物", msg: "洗剤・石鹸・線香・マッチの箱" } },
    { label: "感熱紙", img: "24", result: { title: "① 可燃物", msg: "レシート・ファックス用紙" } },
    { label: "捺染紙（なっせんし）", img: "18", result: { title: "① 可燃物", msg: "紙の詰め物(緩衝材)、アイロンプリント紙" } },
    { label: "戻る", img: "back", isBack: true }
  ],
  // 「布類」を押した後の選択肢
  cloth: [
    { label: "きれいな衣類", img: "35", result: { title: "⑫ 布類", msg: "シャツ、ズボン、スカート、セーター" } },
    { label: "その他の布類", img: "34", result: { title: "⑫ 布類", msg: "シーツ、タオル、布団カバー" } },
    { label: "わた・羽毛入りの衣類", img: "33", result: { title: "① 可燃物", msg: "傷みや汚れのある衣類、下着、スーツ、ダウンジャケット、制服、体操服、着物、ぬいぐるみ、カーテン、まくら、はぎれ、毛布、ふとん" } },
    { label: "戻る", img: "back", isBack: true }
  ],
  // 「缶・びん」を押した後の選択肢
  can: [
    { label: "食品・飲料用の缶", img: "38", result: { title: "⑧ 缶・びん", msg: "缶詰、ジュース、酒類（アルミ・スチールマークの付いたもの）" } },
    { label: "ペットフード缶", img: "37", result: { title: "⑧ 缶・びん", msg: "ドックフード、キャットフードの缶" } },
    { label: "食品・飲料用のびん", img: "36", result: { title: "⑧ 缶・びん", msg: "ジュース、酒類のびん、ジャム、調味料" } },
    { label: "化粧品・薬", img: "39", result: { title: "② 不燃物", msg: "化粧品・薬" } },
    { label: "戻る", img: "back", isBack: true }
  ],
  // 「その他」を押した後の選択肢
  others: [
    { label: "スプレー缶類", img: "8", result: { title: "④ スプレー缶類", msg: "殺虫剤、化粧品、塗料のスプレー缶" } },
    { label: "ライター類", img: "4", result: { title: "⑤ ライター類", msg: "ライター、点火棒" } },
    { label: "蛍光管類", img: "9", result: { title: "⑥ 蛍光管・電球・水銀体温計", msg: "蛍光管、電球、水銀体温計、血圧計、温度計" } },
    { label: "乾電池等", img: "10", result: { title: "⑦ 乾電池", msg: "乾電池、ボタン電池、コイン電池" } },
    { label: "戻る", img: "back", isBack: true }
  ]
};

// 2. 早見表の検索データ（エクセルの内容を反映）
const garbageData = [
  { name: "生ごみ", type: "残飯、貝殻、卵の殻", note: "可燃物" },
  { name: "食用油", type: "食用油を凝固剤で固めたもの", note: "可燃物" },
  { name: "革類・ゴム類", type: "革靴、カバン、財布、野球グローブ、ベルト、ランドセル、長靴、サッカーボール、ゴム手袋、ホース、サンダル、ブルーシート等", note: "可燃物" },
  { name: "科学製品", type: "乾燥剤、保冷剤、カイロ", note: "可燃物" },
  { name: "容器包装（プラ）", type: "カップ類、袋類、パック、トレイ類、ペットボトル等の蓋・ラベル、ボトル類、緩衝材・ネット類", note: "資源プラ" },
  { name: "プラスチック製品", type: "ポリタンク、ポリバケツ、ビデオテープ、ボールペン、DVD・CDケース、プラスチック製のハンガー、洗濯バサミ、タッパー、歯ブラシ、プランター、スポンジ、クリーニングの袋、結束バンド、ストロー、スプーン、フォーク、洗剤の計量カップ", note: "可燃物" },
  { name: "新聞紙", type: "新聞紙、折り込みチラシ", note: "新聞類" },
  { name: "包装紙・紙袋類", type: "デパート等の包装紙、梱包紙、食料品・日用品の紙袋", note: "その他紙類" },
  { name: "印刷物・筆記用紙", type: "コピー紙、メモ紙、パンフレット、名刺、葉書、封筒、ポスター", note: "その他紙類" },
  { name: "紙箱・台紙類", type: "食料品・日用品の紙箱、台紙、紙芯等", note: "その他紙類" },
  { name: "本・雑誌類", type: "本、教科書、ノート、辞典、マンガ本", note: "その他紙類" },
  { name: "段ボール", type: "段ボール（ひもで縛る）", note: "その他紙類" },
  { name: "紙パック", type: "牛乳・ジュースの紙パック", note: "その他紙類" },
  { name: "金属箔がついた紙", type: "中が金属箔の酒パック等、カップめんのふた、タバコの銀紙、金箔入りの贈答箱", note: "可燃物" },
  { name: "防水加工された紙", type: "「紙マーク」があるカップめんの容器、紙製のヨーグルト容器、紙コップ、紙皿など", note: "可燃物" },
  { name: "臭いの強い紙", type: "洗剤・石鹸・線香・マッチの箱", note: "可燃物" },
  { name: "感熱紙", type: "レシート・ファックス用紙", note: "可燃物" },
  { name: "捺染紙（なっせんし）", type: "紙の詰め物(緩衝材)、アイロンプリント紙", note: "可燃物" },
  { name: "きれいな衣類", type: "シャツ、ズボン、スカート、セーター", note: "布類" },
  { name: "その他の衣類", type: "シーツ、タオル、布団カバー", note: "布類" },
  { name: "わた・羽毛入りの衣類", type: "傷みや汚れのある衣類、下着、スーツ、ダウンジャケット、制服、体操服、着物、ぬいぐるみ、カーテン、まくら、はぎれ、毛布、ふとん", note: "可燃物" },
  { name: "食品・飲料用の缶", type: "缶詰、ジュース、酒類（アルミ・スチールマークの付いたもの）", note: "缶・びん" },
  { name: "ペットフード缶", type: "ドックフード、キャットフードの缶", note: "缶・びん" },
  { name: "食品・飲料用のびん", type: "ジュース、酒類のびん、ジャム、調味料", note: "缶・びん" },
  { name: "化粧品・薬", type: "化粧品・薬", note: "不燃物" },
  { name: "ガラス類", type: "ガラス、化粧品、薬、油のびん、果実酒をつけるガラスびん、哺乳瓶、鏡、灰皿、金魚鉢", note: "不燃物" },
  { name: "金属類", type: "なべ、やかん、フライパン、包丁、はさみ、カミソリ、ホッチキス、くぎ、画びょう、蚊取り線香の缶、入浴剤の缶、油の缶、金属製のふた類、針金のハンガー", note: "不燃物" },
  { name: "磁器・陶器類", type: "植木鉢、茶碗、湯飲み、皿、急須、コーヒーカップ、花瓶、壺", note: "不燃物" },
  { name: "大型ごみ", type: "家具、カーペット、たたみ、自転車", note: "大型・一時的多量ごみ" },
  { name: "ペットボトル", type: "飲料用、ペットボトル", note: "ペットボトル" },
  { name: "スプレー缶類", type: "殺虫剤、化粧品、塗料のスプレー缶", note: "スプレー缶類" },
  { name: "ライター類", type: "ライター、点火棒", note: "ライター類" },
  { name: "蛍光灯類", type: "蛍光管、電球、水銀体温計、血圧計、温度計", note: "蛍光管・電球・水銀体温計" },
  { name: "乾電池等", type: "乾電池、ボタン電池、コイン電池", note: "乾電池" }
];

document.addEventListener('DOMContentLoaded', () => {
  const iconGrid = document.querySelector('.icon-grid');
  const resultDiv = document.getElementById("result");
  const tableBody = document.getElementById('tableBody');
  const searchInput = document.getElementById('searchInput');

  // アイコンボタンを描画する関数
  function renderIcons(viewKey) {
    iconGrid.innerHTML = ""; // 一旦中身を空にする

    CATEGORIES[viewKey].forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'garbage-icon';
      btn.innerHTML = `
        <img src="illust${item.img}.jpg" alt="${item.label}">
        <span class="label">${item.label}</span>
      `;

      btn.onclick = () => {
        if (item.isBack) {
          renderIcons('top'); // トップに戻る
        } else if (item.next) {
          renderIcons(item.next); // 次の階層を表示
        } else if (item.result) {
          showResult(item.result); // 最終結果を表示
        }
      };
      iconGrid.appendChild(btn);
    });
  }

  // 結果を表示する関数
  function showResult(info) {
    resultDiv.innerHTML = `
      <div style="border-top: 2px solid #4CAF50; padding-top: 15px;">
        <p style="color: #008000; font-size: 20px;">分別区分: 【${info.title}】</p>
        <p style="font-weight: normal;">（例） ${info.msg}</p>
        <button id="close-result" style="margin-top: 10px; padding: 8px 20px; background: #333; color: white; border: none; border-radius: 5px; cursor: pointer;">閉じる</button>
      </div>
    `;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("close-result").onclick = () => resultDiv.innerHTML = "";
  }

  // テーブル表示の関数
  function renderTable(data) {
    tableBody.innerHTML = data.map(item => `
      <tr>
        <td>${item.name}</td>
        <td>${item.type}</td>
        <td>${item.note}</td>
      </tr>
    `).join('');
  }

  // 検索イベント
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = garbageData.filter(item =>
      item.name.toLowerCase().includes(term) || item.type.toLowerCase().includes(term)
    );
    renderTable(filtered);
  });

  // 初期化：最初のアイコンとテーブルを表示
  renderIcons('top');
  renderTable(garbageData);
});

