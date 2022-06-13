# 99_problems | n1-playset

## Description

L'objectif de cette fonction est de recevoir une chaine de caractères et si cette chaîne contient des doublons, alors `true` sera renvoyée, si elle n'en contient pas, `false` est envoyé.

### Définition de la fonction :

```javascript
function playset(s){}
```

## Explications
La fonction `playset` fait appel à l'objet `Set`. Celle-ci permet de stocker des valeurs uniques du string `s`en la parcourant. Il suffit de récupérer et de comparer les tailles de `s` (la chaine de caractères) et de `test` (la variable `set`). Si leur taille sont égaux, on renvoie false : `s` ne contient aucun doublons. Sinon on renvoie true.

```javascript
const test = new Set(s);
    return (s.length!=test.size);
```

## Compléxité

La fonction fait une comparaison entre deux variables. Toutefois, l'appel de la methode `Set()`, qui parcours la liste, montre que la compléxité serai de `0(n)` : on appelle cela une compléxité linéaire.