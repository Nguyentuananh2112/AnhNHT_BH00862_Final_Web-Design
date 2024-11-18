// list-products.js
import { addToCart } from "../common-component.js";

const products = [
  {
    title: "Facial Cleanser",
    originalPrice: 600000,
    price: 300000,
    currency: "VND",
    imageUrl: "./assets/images/product-01.jpg",
    discount: "-50%",
    reviews: "10.000 reviews",
    rating: 5, // Số sao
  },
  {
    title: "Bio-shroom Rejuvenating Serum",
    originalPrice: 500000,
    price: 320000,
    currency: "VND",
    imageUrl: "./assets/images/product-02.jpg",
    discount: "-36%",
    reviews: "8.500 reviews",
    rating: 4, // Số sao
  },
  {
    title: "Coffee Bean Caffeine Eye Cream",
    originalPrice: 400000,
    price: 350000,
    currency: "VND",
    imageUrl: "./assets/images/product-03.jpg",
    discount: "-12%",
    reviews: "5.200 reviews",
    rating: 4.5, // Số sao
  },
  // Thêm các sản phẩm khác nếu cần
  {
    title: "Facial Cleanser",
    originalPrice: 600000,
    price: 300000,
    currency: "VND",
    imageUrl: "./assets/images/product-07.jpg",
    discount: "-50%",
    reviews: "10.000 reviews",
    rating: 5, // Số sao
  },
];

// nó duyệt cái list products, lấy từng product

// kiểu bê nguyên cái thẻ <li> bên html sang, rồi chỉ những chố nào giá trị động thì dùng ${value}

// Hàm để tạo danh sách sản phẩm và chèn vào DOM
function generateProductList() {
  const productListElement = document.querySelector("#list-product"); //nó sẽ chèn cái thẻ li này vào chỗ cái id list-product
  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "scrollbar-item";

    li.innerHTML = `
      <div class="shop-card">
        <div class="card-banner img-holder" style="--width: 540; --height: 720;">
          <img src="${
            product.imageUrl
          }" width="540" height="720" loading="lazy" alt="${
      product.title
    }" class="img-cover">
          <span class="badge" aria-label="${product.discount}">${
      product.discount
    }</span>
          <div class="card-actions">
            <button class="action-btn btn-add-to-cart" aria-label="add to cart">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
            </button>
            <button class="action-btn" aria-label="add to wishlist">
              <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>
        <div class="card-content">
          <div class="price">
            <del class="del">${product.originalPrice.toLocaleString()} ${
      product.currency
    }</del>
            <span class="span">${product.price.toLocaleString()} ${
      product.currency
    }</span>
          </div>
          <h3>
            <a class="card-title">${product.title}</a>
          </h3>
          <div class="card-rating">
            <div class="rating-wrapper" aria-label="${
              product.rating
            } star rating">
              ${Array.from(
                { length: 5 },
                (_, index) =>
                  `<ion-icon name="star" aria-hidden="true"></ion-icon>`,
              ).join("")}
            </div>
            <p class="rating-text">${product.reviews}</p>
          </div>
        </div>
      </div>
    `;
    li.querySelector(".btn-add-to-cart").addEventListener("click", () => {
      addToCart(
        product.title,
        product.price,
        product.currency,
        product.imageUrl,
        product.description,
      );
    });
    productListElement.appendChild(li);
  });
}

// Xuất hàm để sử dụng
export { generateProductList };
