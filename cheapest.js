const phones = [
    {name: 'samsung', price: 20000, camera: '12em', color: 'black'},
    {name: 'Xoami', price: 18000, camera: '12em', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12em', color: 'black'},
    {name: 'Iphone', price: 1200000, camera: '12em', color: 'black'},
    {name: 'Wlaton', price: 220000, camera: '12em', color: 'black'},
    {name: 'Vivo', price: 19000, camera: '12em', color: 'black'},
]

function getCheapestPhone(phones){
     let min = phones[0];
     for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
     }
     return min;
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is', cheap);