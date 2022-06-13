function stormtroopers(numbers) {
    let obj = {};
    let result = [];

    for (var i = 0; i < numbers.length; i++) {
        if (obj[numbers[i]] == null) {
            obj[numbers[i]] = 1;
        } else {
            obj[numbers[i]] += 1;
        }
    }

    for (var key in obj) {
        if (obj[key] == 1) {
            result.push(parseInt(key));
        }
    }
    return result;
}

module.exports = { stormtroopers }