
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//   }

// function choice(items){
//     const randSelect = getRandomIntInclusive(0, 14);
//     let fruilt = items[randSelect];
//     return fruilt;
// }

// function remove(items, item){
//     for(var i = items.length - 1; i >= 0; i--) {
//         if(items[i] === item) {
//            items.splice(i, 1);
//         }
//     }
//     let fruitLeft = items.length;
//     return fruitLeft;
// }

// export {getRandomIntInclusive, choice, remove}\

function choice(items){
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove(items, item){
    for(let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [ ...items.slice(0.1), ...items.slice(i + 1) ];
        }
    }
}

export {choice, remove};
