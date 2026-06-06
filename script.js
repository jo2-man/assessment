// 簡易的な「送信しました」メッセージ表示だけ
const form = document.getElementById("contactForm");
const messageEl = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 本当の送信はしない（サーバーがないため）

    messageEl.textContent = "送信ありがとうございました！（※デモのため実際には送信されていません）";
    messageEl.style.color = "#16a34a";

    form.reset();
  });
}
