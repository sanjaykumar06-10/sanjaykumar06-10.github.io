const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const addToCart = (id) => {
  if (!cart[id]) {
    cart[id] = 1;
  }
};

const increment = (id) => {
  cart[id] += 1;
  dispCart();
};

const decrement = (id) => {
  if (cart[id] > 1) {
    cart[id] -= 1;
  } else {
    delete cart[id];
  }
  dispCart();
};

const dispCart = () => {
  let str = "<h2 style='text-align:center;'>Cart</h2>";
  products.forEach((value) => {
    if (cart[value.id]) {
      str += `<div class="cart-item">
        ${value.name} - $${value.price}
        <br/>
        <button onclick='decrement(${value.id})'>-</button>
        ${cart[value.id]}
        <button onclick='increment(${value.id})'>+</button>
        <br/>Total: $${value.price * cart[value.id]}
      </div>`;
    }
  });
  str += `<h4 id='orderValue'></h4>`;
  root.innerHTML = str;
  dispOrderValue();
};

const dispOrderValue = () => {
  const grandTotal = products.reduce((sum, value) => {
    return sum + value.price * (cart[value.id] ?? 0);
  }, 0);
  document.getElementById("orderValue").innerText = `Order Value: $${grandTotal}`;
};

const showProducts = () => {
  let str = "";
  products.forEach((value) => {
    str += `<div>
      <h3>${value.name}</h3>
      <h4>$${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
    </div>`;
  });
  root.innerHTML = "<div class='row'>" + str + "</div>";
};
