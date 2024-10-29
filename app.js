const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
]


function addItem(itemIndex) {
  let selectedItem = iceCream[itemIndex]
  selectedItem.quantity += 1
  console.log('selectedItem', selectedItem)


  drawCart()
}

function calculateCartTotal() {
  let total = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    total += item.price * item.quantity
  }
  console.log('total', total)
  return total;
}

function checkout() {
  const cartTotal = calculateCartTotal()
  const confirmed = confirm(`Are you sure you want to purchase your ice cream with a total of: ${cartTotal}`)
  if (confirmed)
    for (let i = 0; i < iceCream.length; i++) {
      let item = iceCream[i]
      item.quantity = 0
    }
  drawCart()

}



function drawCart() {
  let content = ''
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.quantity > 0) {
      content += `
    <p class="d-flex justify-content-between">
      <span>${item.quantity}x ${item.name}</span>
      <span class="text-success"><i class="mdi mdi-currency-usd"></i>${item.price * item.quantity}</span>
    </p>`
    }
  }
  console.log('content', content);
  const cartElm = document.getElementById('cart-display')
  cartElm.innerHTML = content
  drawTotal()
}



function drawTotal() {
  let cartTotal = calculateCartTotal()
  const totalElm = document.getElementById('cart-total')
  totalElm.innerText = cartTotal.toFixed(2)
}