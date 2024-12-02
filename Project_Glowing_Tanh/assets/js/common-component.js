
// (event listener) để xử lý các sự kiện click trên bất kỳ phần tử nào bên trong body.
document.body.addEventListener("click", function (event) {
  //// Kiểm tra nếu sự kiện xảy ra trên một phần tử có id là "btnCart"
  if (event.target && event.target.id === "btnCart") {
    // Chuyển hướng người dùng đến trang cart.html
    window.location.href = "cart.html";
  }
});

// Xu ly du lieu va luu no vao local
function addToCart(name, price, currency, imageUrl, description) {
  
  // JSON.parse(...): Chuyển đổi chuỗi JSON lưu trữ thành mảng JavaScript.
  // localStorage.getItem("cart"): Lấy dữ liệu giỏ hàng từ trình duyệt.
  // Lấy giỏ hàng từ localStorage hoặc tạo mảng mới nếu chưa có
  let cart = JSON.parse(localStorage.getItem("cart")) || []; 

  // Thêm sản phẩm vào giỏ hàng
  cart.push({ name, price, currency, imageUrl, description });

  // Cập nhật giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart)); //Lưu dữ liệu giỏ hàng vào localStorage dưới dạng chuỗi, để giữ trạng thái giỏ hàng.

  alert(`${name} has been added to your cart!`); // Thông báo thêm thành công
}

export { addToCart };
