# 99_problems | n1-stormtroopers

## Description

La fonction reçoit une liste de nombres entiers et devra renvoyer une nouvelle liste conservant que les nombres qui figurent qu'une seule fois dans la liste originale.

### Définition de la fonction :
```javascript
function stormtroopers(numbers){}
```

## Explications
Au début de la fonction, on initialise un objet `obj` que l'on utilisera pour compter le nombre de fois où apparait un nombre dans la liste. On initialise aussi un tableau `result` qui contiendra la liste des nombres uniques.
```javascript
let obj = {};
let result = [];
```
Le premier `for()` de notre fonction permet de compter le nombre de fois où apparait un élément de notre liste.
```javascript
for (var i = 0; i < numbers.length; i++) {
    if (obj[numbers[i]] == null) {
        obj[numbers[i]] = 1;
    } else {
        obj[numbers[i]] += 1;
    }
}
```
Le deuxième `for()` permet mettre les éléments unique dans notre tableau `result` et ensuite on renvoie le tableau.
```javascript
for (var key in obj) {
    if (obj[key] == 1) {
        result.push(parseInt(key));
    }
}
return result;
```
## Compléxité

Nous parcourons une seule fois la liste, du début jusqu'à la fin, avec `n` corrrespondant à la taille de notre liste. Notre algorithme utilise la compléxité linéaire avec une complexité de `0(n)`.
