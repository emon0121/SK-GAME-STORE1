const tg = window.Telegram.WebApp;

tg.expand();

const user = tg.initDataUnsafe.user;

console.log("Telegram ID:", user.id);
console.log("Username:", user.username);
