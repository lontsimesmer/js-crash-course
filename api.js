// let products = []

async function loadProducts () {
  const response = await fetch('https://dummyjson.com/products')
  //   .then(
  //     (response) => response.json()
  //   );
  return await response.json()
}

loadProducts().then((data) => {
  products = data.products
  //   renderAllProducts();
})

function renderSingleproduct (product) {
  return `
  <div class="products">
  <div class="product">
    <div class="carousel">
      <div class="details">
        <img src="${product.thumbnail}" alt="" class="thumbnail" />
        <div>
          <p>${product.brand}</p>
          <h3>${product.title}</h3>
          <h1>${product.price}</h1>
        </div>
      </div>
      <p>${product.description}</p>
    </div>
  </div>
  <div>a</div>
  <div>a</div>
</div>
    `
}
renderSingleproduct()
