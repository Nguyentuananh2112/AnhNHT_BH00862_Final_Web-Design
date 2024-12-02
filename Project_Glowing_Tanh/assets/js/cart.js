// lấy sự kiện DOMContentLoaded đảm bảo rằng DOM đã được tải xong trước khi thực hiện các thao tác
document.addEventListener("DOMContentLoaded", function () {
  fetch("header-import.html")
    .then((response) => {
      // Kiểm tra xem phản hồi từ server có hợp lệ không
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      // Chèn nội dung đã tải
      document.getElementById("header-imp-cart").innerHTML = data;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error,
      );
    });

    // Lấy các phần tử DOM với id 
  const cartList = document.getElementById("cart-list");
  const totalPriceElement = document.getElementById("total-price");

  // Lấy giỏ hàng từ localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // Nếu local k có dữ liệu thì card sẽ là mảng trống []

  let total = 0; // Biến lưu tổng giá trị

  // Duyệt qua từng sản phẩm trong giỏ hàng
  cart.forEach((item) => {
    // lấy <li> cho mỗi sp trong cart
    const li = document.createElement("li");
    li.className = "cart-item"; // Thêm class để dễ chỉnh CSS

    li.innerHTML = `
      <div class="card">
        <div class="product-image" style="background-image: url('${
          item.imageUrl
        }');"></div>
        <div class="card-content">
          <h2 class="product-title">${item.name}</h2>
          <p class="product-description">${item.description}</p>
          <p class="product-price">Price: ${item.price.toLocaleString()} ${
      item.currency
    }</p>
        </div>
      </div>
    `; // Tạo cấu trúc card cho sản phẩm

    cartList.appendChild(li); // Thêm vào danh sách giỏ hàng
    total += item.price; // Cộng dồn giá trị sản phẩm
  });

  // Cập nhật tổng giá trị
  totalPriceElement.textContent = `Total Price: ${total.toLocaleString()} VND`; // Hiển thị tổng giá trị
});
