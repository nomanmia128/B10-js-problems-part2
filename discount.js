/**
 * upto 100: ---> 100
 * more than 101-200: 200
 * more than: ---> 70;
 */

function dicountdPrice(quantity){
    if(quantity <= 100){
         const total = quantity * 100;
         return total;
    }

    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
      const total = quantity * 70
      return total;
    }
}

const price = dicountdPrice(5);
console.log(price);