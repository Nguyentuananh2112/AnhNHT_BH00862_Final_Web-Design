// document.addEventListener("DOMContentLoaded", function () {
//   fetch("content.html")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.text();
//     })
//     .then((data) => {
//       document.getElementById("content").innerHTML = data;
//     })
//     .catch((error) => {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error,
//       );
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("header.html")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.text();
//     })
//     .then((data) => {
//       // Lấy tất cả các phần tử với class "header-common"
//       const headerElements = document.querySelectorAll(".header-common");

//       // Duyệt qua từng phần tử và nạp nội dung
//       headerElements.forEach((element) => {
//         element.innerHTML = data;
//       });
//     })
//     .catch((error) => {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error,
//       );
//     });
// });

document.body.addEventListener("click", function (event) {
  if (event.target && event.target.id === "btnCart") {
    window.location.href = "cart.html";
  }
});

function addToCart(name, price, currency, imageUrl, description) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy giỏ hàng từ localStorage

  // Thêm sản phẩm vào giỏ hàng
  cart.push({ name, price, currency, imageUrl, description });

  // Cập nhật giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} has been added to your cart!`); // Thông báo thêm thành công
}

export { addToCart };
