let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Prueba')
});

app.get('/a', (req, res) => {
    res.send('a')
});

app.get('/b', (req, res) => {
    res.send('b')
});

app.get('/c', (req, res) => {
    res.send('c')
});

app.listen(3000, () => {
    console.log('listen in 3000')
});

// Para crear un repositorio de git local en mi equipo, hay que poner en la consola ----> git init
// Para deshacer el git add, utilizaremos el comando ---> git reset
// Para ver todos los commits dentro del git se utilizará el comando git log
// Para deshacer el último commit creado se utilizaará el comando ----> git reset --hard HEAD^
// Para añadir el reservorio local al de Github ----> git remote add origin https://github.com/neresaas/prueba-git.git
// Luego hay que crear una rama ----> git branch -M main (la rama se llama main). Para consultar las ramas que existen se utilizará el comando ----> git branch
// Para que el repositorio también desaparezca de GitHub se utilizará el comando ----> git push origin main --force
// Para traer repositorios que están subidos en Github pero todavía no están en tu repositorio local ----> git pull