document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Gán sự kiện click cho tất cả nút "Add to Cart"
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productName = button.getAttribute("data-name");
      const productPrice = parseFloat(button.getAttribute("data-price"));

      // Thêm sản phẩm vào giỏ hàng
      addToCart(productName, productPrice);
    });
  });
});

import { generateBannerList } from "./data/list-banner.js";
import { generateProductList } from "./data/list-product.js";
import { generateUnderList } from "./data/list2.js"

document.addEventListener("DOMContentLoaded", function () {
  generateBannerList();
  generateProductList();
  generateUnderList();
});
