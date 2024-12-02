import { addToCart } from "../common-component.js";
const products = [
  {
    title: "Facial Cleanser",
    originalPrice: 600000,
    price: 300000,
    currency: "VND",
    imageUrl: "./assets/images/product-07.jpg",
    discount: "-50%",
    reviews: "10.000 reviews",
    rating: 5,
  },
  {
    title: "Bio-shroom Rejuvenating Serum",
    originalPrice: 500000,
    price: 320000,
    currency: "VND",
    imageUrl: "./assets/images/product-08.jpg",
    discount: "-36%",
    reviews: "8.500 reviews",
    rating: 4, 
  },
  {
    title: "Coffee Bean Caffeine Eye Cream",
    originalPrice: 400000,
    price: 350000,
    currency: "VND",
    imageUrl: "./assets/images/product-09.jpg",
    discount: "-12%",
    reviews: "5.200 reviews",
    rating: 4.5,
  },

 
];


function generateUnderList() {
  const productListElement = document.querySelector("#list-under450");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "scrollbar-item";

    li.innerHTML = `
      <div class="shop-card">

  <div class="card-banner img-holder" style="--width: 540; --height: 720;">
    <img src="${
      product.imageUrl
    }" 
    width="540" height="720" loading="lazy"
      alt="Facial cleanser" class="img-cover">

    <div class="card-actions">

      <button class="action-btn btn-add-to-cart" aria-label="add to cart">
        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
      </button>

      <button class="action-btn" aria-label="add to whishlist">
        <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
      </button>

     

    </div>
  </div>

  <div class="card-content">

    <div class="price">
      <span class="span">$425.000 VND</span>
    </div>

    <h3>
      
      <a class="card-title">${product.title}</a>
    </h3>

    <div class="card-rating">

      <div class="rating-wrapper" aria-label="5 start rating">
        <ion-icon name="star" aria-hidden="true"></ion-icon>
        <ion-icon name="star" aria-hidden="true"></ion-icon>
        <ion-icon name="star" aria-hidden="true"></ion-icon>
        <ion-icon name="star" aria-hidden="true"></ion-icon>
        <ion-icon name="star" aria-hidden="true"></ion-icon>
      </div>

      <p class="rating-text">5170 reviews</p>

    </div>

  </div>

</div>
    `;

    // Thêm sự kiện cho nút "Add to Cart"
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

export {generateUnderList};

