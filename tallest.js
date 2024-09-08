// max number

// const hights = [12, 4, 43, 54, 76, 87, 98, 67, 100];

// function getMax(numbers){
//    let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//            max = num;
//         }
//     }
//     return max;
// }

// const max = getMax(hights);
// console.log('Max value is',max)



// homework: min number

const hights = [12, 4, 43, 54, 76, 87, 98, 67, 100];

function getMax(numbers){
    let max = numbers[0];
    for (const num of numbers){
        if(num < max){
          max = num;
        }
    }
    return max;
} 

const max = getMax(hights);
console.log('Max value is', max);