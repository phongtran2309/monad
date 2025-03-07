const fs = require("fs");

// Hàm đọc danh sách ví từ file
function readWallets(filename) {
  return fs.readFileSync(filename, "utf8").split("\n").map(line => line.trim()).filter(Boolean);
}

// Hàm xáo trộn danh sách ví (Fisher-Yates Shuffle)
function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Hàm ghi danh sách vào file
function writeWallets(filename, wallets) {
  fs.writeFileSync(filename, wallets.join("\n"), "utf8");
}

// Đọc danh sách ví từ wallet.txt
const walletList = readWallets("wallet.txt");

if (walletList.length === 0) {
  console.error("❌ Danh sách ví trống!");
  process.exit(1);
}

// Xáo trộn 3 lần và lưu vào các file tương ứng
writeWallets("beanswapWallet.txt", shuffleArray(walletList));
writeWallets("monorailWallet.txt", shuffleArray(walletList));
writeWallets("deployWallet.txt", shuffleArray(walletList));

console.log("✅ Đã tạo 3 file ví với danh sách được xáo trộn!");
