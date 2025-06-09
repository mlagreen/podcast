// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Dossier des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes pour les pages HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/manifeste', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manifeste.html'));
});

// Route pour le flux RSS
app.get('/feed', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'feed.rss'));
});

app.listen(port, () => {
  console.log(`Site mla.green en ligne sur http://localhost:${port}`);
});
