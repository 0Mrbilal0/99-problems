module.exports = { daemon } ;

function daemon(numbers, k) {
    if (k > numbers.length) {
        return false;
    } else {
        for (let i = 0 ; i<k ; i++) {
            if (numbers[i] >= numbers[k]) {
                return false;
            }
        }
        for (let j=k+1 ; j < numbers.length ; j++){
            if (numbers[j] < numbers[k]){
                return false;
            }
        }
        return true;
    }
}

console.log(daemon([10,152,1540,1257,115645],4))