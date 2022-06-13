## EXPLICATION

Pour commencer je crée des variables pour chaques caractères a verifier :

```javascript
module.exports = {open_closed};

function open_closed(s) {
    let p = 0;
    let c = 0;
    let g = 0;
    let a = 0;
...
}
```

Ensuite je verifie si le crochet ou la parentheses est ouverte en mettant +1 au variables crée pour et -1 pour chaque
caracteres fermée trouver. J'arrete la fonction si j'ai -1 sur la variable car ca voudrai dire que je commence par une
parentheses/crochet fermée

```javascript
module.exports = {open_closed};

function open_closed(s) {
    ...
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === "(")
            p++;

        if (s[i] === "[")
            c++;
    ...
        if (s[i] === ")")
            p--;

        if (s[i] === "]")
            c--;

        if (p === -1 || c === -1)
            return false;
    }
    if (p === 0 && c === 0 ...)
    return true
else
    return false
}

```

Pour les guillemets et parentheses je verifie si c'est égale a 2 puisqu'on ne peut pas differencier ceux ouverts de ceux
fermée :

```javascript
module.exports = {open_closed};

function open_closed(s) {
    let p = 0;
    let c = 0;
    let g = 0;
    let a = 0;

    for (let i = 0; i <= s.length; i++) {
    ...
        if (s[i] === "\"")
            g++;

        if (s[i] === "\'")
            a++;
    ...
    }
    if (... g%2 === 0 && a%2 === 0)
    return true;
else
    return false;
}
```

## COMPLEXITE

O(n) est respecter car on passe dans le tableau n cases 1 fois grace a une boucle for().