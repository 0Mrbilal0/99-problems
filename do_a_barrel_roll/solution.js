function do_a_barrel_roll(numbers, k){
    if(numbers.length == 0 || k <= 0){
        return numbers;
    }
    let result = new Array(numbers);
    for(let i = 0 ; i < numbers.length; i++){
        let j = i + k;
        if(j<numbers.length)
            result[i] = numbers[j];
        else {
            j = j % numbers.length;
            result[i] = numbers[j];
        } 
    }
    return result;
}

module.exports = { do_a_barrel_roll }