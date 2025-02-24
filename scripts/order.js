let orderName = localStorage.getItem('orderName');
let orderPrice = localStorage.getItem('orderPrice');
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let buyForm = document.getElementById('buyForm');

productName.textContent = orderName;
productPrice.textContent = orderPrice
