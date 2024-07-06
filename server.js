// src/server.js
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// Rota para obter usuários
app.get('/api/users', (req, res) => {
    const usersPath = path.join(__dirname, '..', 'mocks', 'users.json');
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    res.json(users);
});

// Rota padrão
app.get('/', (req, res) => {
    res.send('API mockada está funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`http://localhost:3000/products${PORT}`);
});
