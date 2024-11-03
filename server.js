const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/texto', (req, res) => {
    res.send('Hola mundo');
});

app.get('/json', (req, res) => {
    res.json({ mensaje: 'Hola mundo!' });
});

app.get('/archivo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Pibes.jpeg')); 
});

app.get('/error', (req, res) => {
    res.status(404).send('No encontrado');
});

app.get('/redirigir', (req, res) => {
    res.redirect('/otra-ruta');
});

app.get('/otra-ruta', (req, res) => {
    res.send('Has sido redirigido.');
});

app.get('/html', (req, res) => {
    res.send('<h1>Has enviado HTML!</h1>');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});