// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const subtotals = [];
  for (const product of products) {
    const subtotal = updateSubtotal(product);
    subtotals.push(subtotal);
  }
  console.log(subtotals);
  // ITERATION 3
  const total = subtotals.reduce((total, value) => {
    return total + value;
  }, 0);
  const totalText = document.querySelector('#total-value span');
  totalText.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  console.log('The target in remove is:', target);

  //... your code goes here
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputs = [...document.querySelectorAll('.create-product input')];
  let nameInputValue = inputs[0].value;
  let priceInputValue = inputs[1].valueAsNumber;

  if (!nameInputValue) {
    alert('You need to add a name to the Product!');
    return false;
  } else if (!priceInputValue) {
    alert('You need to add a price to the Product!');
    return false;
  }

  const product = document.createElement('tr');
  product.setAttribute('class', 'product');

  const nameCell = document.createElement('td');
  nameCell.setAttribute('class', 'name');
  nameCell.innerHTML = `<span>${nameInputValue}</span>`;
  product.appendChild(nameCell);

  const priceCell = document.createElement('td');
  priceCell.setAttribute('class', 'price');
  priceCell.innerHTML = `$<span>${priceInputValue}</span>`;
  product.appendChild(priceCell);

  const quantityCell = document.createElement('td');
  quantityCell.setAttribute('class', 'quantity');
  quantityCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  product.appendChild(quantityCell);

  const subtotalCell = document.createElement('td');
  subtotalCell.setAttribute('class', 'subtotal');
  subtotalCell.innerHTML = `$<span>0</span>`;
  product.appendChild(subtotalCell);

  const actionCell = document.createElement('td');
  actionCell.setAttribute('class', 'action');
  actionCell.innerHTML = `<button class="btn btn-remove">Remove</button>`;
  product.appendChild(actionCell);

  const table = document.querySelector('tbody');
  table.appendChild(product);

  inputs[0].value = '';
  inputs[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = [...document.querySelectorAll('.btn-remove')];
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }
  const addProductButton = document.querySelector('#create');
  addProductButton.addEventListener('click', createProduct);
  //... your code goes here
});
