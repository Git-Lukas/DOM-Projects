const cartFruits = document.querySelector('.cart-fruits')
const itemBtn = document.querySelectorAll('.item-btn')
const totalCost = document.querySelector('.total-cost')

const shopBasket = []

const addToCart = (e) => {
    //console.log(e.target.dataset.fruit)
    
    const product = {
        title: e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        amount: 1,
        price: parseFloat(e.target.dataset.price)
    }

    //findIndex() returns -1 if it doesn't find an index that matches the condition
    const index = shopBasket.findIndex(item => item.id===product.id)

    index===-1 ? shopBasket.push(product) : shopBasket[index].amount += 1
    
    //console.log(shopBasket)

    showBasket()

}

itemBtn.forEach(btn => btn.addEventListener('click', addToCart))

const showBasket = () => {
    let template = ''

    shopBasket.forEach(fruitList => {
        if(fruitList.amount>=1){
            template += `
            <li class="cart-fruits-quantity">
                <span class="fruit">${fruitList.title}</span>
                <span class="quantity">${fruitList.amount}</span>
            </li> 
            <li class="cart-fruits-total">
                <span class="total">Total: $ ${fruitList.price * fruitList.amount}</span>
                <button class="add-btn" data-id="${fruitList.id}">Add</button>
                <button class="remove-btn" data-id="${fruitList.id}">Remove</button>
            </li>
            `
        }
        return template
            
    })

    cartFruits.innerHTML = template    

    showTotal()

    showCost()

}

const showCost = () => {
    
    const addButton = document.querySelectorAll('.add-btn')
    const removeButton = document.querySelectorAll('.remove-btn')

    addButton.forEach(btn => btn.addEventListener('click', add))
    removeButton.forEach(btn => btn.addEventListener('click', remove))
}

const add = (e) => {
    //console.log(e.target.dataset.id)
    shopBasket.map(item => {
        //console.log(item.id)
        if(item.id === e.target.dataset.id) {
            item.amount++
        }
        return item
    })
    showBasket()
}

const remove = (e) => {

    shopBasket.map(item => {
        if(item.id === e.target.dataset.id && item.amount>=1) {
            item.amount--
        }
        return item
    })
    showBasket()
}

const showTotal = () => {

    const total = shopBasket.reduce((acc,currentValue) => 
        acc + currentValue.price * currentValue.amount, 0
    )
    
    //console.log(total)
    totalCost.textContent = `Total: $ ${total}`     
}

