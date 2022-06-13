## EXPLICATION

J'ai commencer par diviser mon code en deux étapes :

- verifier les chiffres apres "k"
    ```javascript
        for (let i = 0 ; i<k ; i++) {
            if (numbers[i] >= numbers[k]) {
                return false;
            }
        }
    ```
- verifier les chiffres avant "k"
    ```javascript
        for (let j=k+1 ; j < numbers.length ; j++){
            if (numbers[j] < numbers[k]){
                return false;
            }
        }
    ```
Puis je renvoie true si les deux verification passent.

Ensuite j'ai fais la verification d'erreurs dans le cas où k serais plus grand que la taille du tableau :

```javascript
    if (k > numbers.length){
        return false;
    }
```

Enfin j'export le projet pour la moulinette.
```javascript
    module.exports = { daemon } ;
```

## COMPLEXITE

La fonction répond à la complexitée O(n) car on passe une seule fois dans le tableau avec la boucle for().