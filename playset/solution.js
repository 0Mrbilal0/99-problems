module.exports = {playset};

function playset(s){
    const test = new Set(s);
    return (s.length !== test.size);
}