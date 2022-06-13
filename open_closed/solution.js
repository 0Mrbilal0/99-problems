module.exports = {open_closed};

function open_closed(s) {
    let p = 0;
    let c = 0;
    let g = 0;
    let a = 0;

    for (let i = 0; i <= s.length; i++) {
        if (s[i] === "(")
            p++;

        if (s[i] === "[")
            c++;

        if (s[i] === "\"")
            g++;

        if (s[i] === "\'")
            a++;

        if (s[i] === ")")
            p--;

        if (s[i] === "]")
            c--;

        if (p === -1 || c === -1)
            return false;
    }
    if (p === 0 && c === 0 && g%2 === 0 && a%2 === 0)
        return true
    else
        return false
}
