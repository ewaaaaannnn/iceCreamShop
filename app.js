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
}

function calculateCartTotal() {
  let total = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    total += item.price * item.quantity
  }
  console.log('total', total)
  return total
}