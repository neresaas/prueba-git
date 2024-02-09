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

app.listen(3000, () => {
    console.log('listen in 3000')
});

// Para crear un repositorio de git local en mi equipo, hay que poner en la consola ----> git init
// Para deshacer el git add, utilizaremos el comando ---> git reset