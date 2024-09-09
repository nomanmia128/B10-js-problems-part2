const numbers = [12, 43, 56, 43, 76, 87, 98];

const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200},
]

function grtShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = grtShoppingTotal(products);
console.log('total ajke khosabe:', total);