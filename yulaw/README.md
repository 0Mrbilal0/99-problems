# 99_problems | n1-yulaw

## Description

L'objectif de cette fonction est de renvoyer une nouvelle chaîne correspondant à celle reçue en paramètre, en unissant chacun des doublons.

### Définition de la fonction :
```javascript
function yulaw(s){}
```

## Explications
La fonction `yulaw` fait appel à l'objet `Set`. Celle-ci permet de stocker des valeurs uniques du string `s`en la parcourant. On renvoie donc une nouvelle chaîne de caractères en transformant l'objet `Set` prenant en paramètre `s` avec le préfixe `Array.from()`. 
```javascript
    return Array.from(new Set(s));
```

## Compléxité

L'objet `Set` fait un parcours du string `s`. L'objet `Array.from()` permet de créer un tableau en fonction du paramètre : ici `new Set`. Ainsi `Array.from()` doit parcourir l'ensemble de valeurs stockées dans `new Set(s)`. .Notre algorithme aura donc une complexité de `0(n)` (`n` est la taille de `s`) : une compléxité linéaire.