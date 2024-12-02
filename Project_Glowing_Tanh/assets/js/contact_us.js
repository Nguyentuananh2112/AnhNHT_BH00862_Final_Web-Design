// Gửi thông báo đã gửi thông tin liên hệ thành công 
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent! We'll get back to you soon.");
});

function returnToHome() {
    window.location.href = "index.html";
}