document.addEventListener("DOMContentLoaded", () => {
  const acc = document.getElementById("acc");

  if (!acc) return; // تأكد أن العنصر موجود

  const isLoggedIn = localStorage.getItem("logined") === "true";
  const userEmail = localStorage.getItem("userEmail");

  if (isLoggedIn && userEmail) {
    acc.textContent = "حسابي";
    acc.href = "account.html"; // غير الرابط حسب صفحة حسابك
  } else {
    acc.textContent = "تسجيل دخول";
    acc.href = "login.html";
  }
});
