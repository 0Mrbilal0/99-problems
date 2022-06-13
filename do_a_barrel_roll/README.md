## 99_problems | n1-do_a_barrell_roll

## Description

L'objectif de cette fonction est de renvoyer un tableau d'entier `numbers` avec `k` rotations vers la gauche: on peut voir ca comme un décalage vers la gauche de `k`.

## Définition de la fonction :
```javascript
function do_a_barrel_roll(numbers, k){}
```

## Explications
La fonction va créer une variable `j` temporaire afin de prendre la valeur de l'indice `i` et l'additionner au paramètre `k`.On vérifiera que celle-ci est plus petite que la taille du tableau `numbers`. Si elle est plus petite, on donne la valeur de `numbers[j]` au tableau `result[i]`. Sinon on fait l'opération `j = j % numbers.length` afin de simuler un retour vers le début du tableau `numbers`. Elle renvoie, après avoir parcouru `numbers`, le tableau `result`.

## Compléxité
La fonction parcours le tableau `result` de taille `n` (qui est de meme taille que celui du paramètre `numbers`). Cette boucle fait de la fonction une compléxité linéaire : `0(n)`.