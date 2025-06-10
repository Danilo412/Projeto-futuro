const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let clients = []; // in-memory client store
let purchases = {}; // clientId -> [purchases]
let nextClientId = 1;

function findClientByCPFOrEmail(cpfCnpj, email) {
  return clients.find(c => c.cpfCnpj === cpfCnpj || c.email === email);
}

app.post('/clients', (req, res) => {
  const { name, phone, email, address, cpfCnpj } = req.body;
  if (!name || !email || !cpfCnpj) {
    return res.status(400).json({ error: 'name, email and cpfCnpj are required' });
  }
  const duplicate = findClientByCPFOrEmail(cpfCnpj, email);
  if (duplicate) {
    return res.status(400).json({ error: 'Client already exists', id: duplicate.id });
  }
  const id = nextClientId++;
  const client = { id, name, phone, email, address, cpfCnpj, createdAt: new Date() };
  clients.push(client);
  purchases[id] = [];
  res.status(201).json(client);
});

app.get('/clients', (req, res) => {
  res.json(clients);
});

app.post('/clients/:id/purchases', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const client = clients.find(c => c.id === id);
  if (!client) return res.status(404).json({ error: 'Client not found' });
  const { date, value, description } = req.body;
  const purchase = { date: date ? new Date(date) : new Date(), value, description };
  purchases[id].push(purchase);
  res.status(201).json(purchase);
});

app.get('/clients/:id/purchases', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const client = clients.find(c => c.id === id);
  if (!client) return res.status(404).json({ error: 'Client not found' });
  res.json(purchases[id]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
