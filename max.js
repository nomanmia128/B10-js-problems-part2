const disha = 56;
const salman = 96;

if(disha > salman){
    console.log('Disha will get the strawberry');
}
else{
    console.log('salman will get the strawberry');
}


// inside a function
function getMax (num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const Max1 = getMax(96, 79);
const Max2 = getMax(56, 99);
const ultimateMax= getMax(Max1, Max2);
console.log('Max of two is:', ultimateMax);