// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseInt(product.querySelector('.price span').textContent);
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
    subtotals.push(updateSubtotal(product));
  }
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
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = [...document.querySelectorAll('.btn-remove')];
  for (let button of removeButtons) {
    button.addEventListener('click', removeProduct);
  }
  //... your code goes here
});
