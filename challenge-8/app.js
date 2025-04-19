/**
 * Write your challenge solution here
 */

let cart = []

const items = document.getElementById('cart-items')
const totalprice = document.getElementById('cart-total')

function updatecart() {
    items.innerHTML = ''
    if (cart.length === 0) {

        const emptydiv = document.createElement('div')
        emptydiv.classList.add('empty-cart')
        emptydiv.textContent = 'Cart is empty'
        items.appendChild(emptydiv)
        totalprice.innerHTML = `<h3>Total: $0.00</h3>`

    } else {
        let total = 0

        cart.forEach((item, index) => {

            const itemdiv = document.createElement('div')
            itemdiv.classList.add('cart-item')
            itemdiv.innerHTML =

                `<span> ${item.name} </span> 
            <div> <button onclick="removeQty(${index})"> - </button>
            <span>${item.quantity}</span>
            <button onclick="addQty(${index})"> + </button>
            <span> ${(item.price * item.quantity).toFixed(2)} </span>
            <button onclick="removeItem(${index})"> Remove </button> </div>`

            items.appendChild(itemdiv)
            total = total + item.price * item.quantity
        })
        totalprice.innerHTML = `<h3>Total: $${total.toFixed(2)}<h3>`
    }
}

function addQty(index) {
    cart[index].quantity = cart[index].quantity + 1;
    updatecart()
}

function removeQty(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity = cart[index].quantity - 1;
    } else {
        cart.splice(index, 1);
    }
    updatecart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updatecart();
}

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name)
    if (existingItem) {
        existingItem.quantity += 1
    } else {
        cart.push({ name, price, quantity: 1 })

    }
    updatecart()
}

updatecart()