const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  },
  {
    "id": 4,
    "name": "Michael Brown",
    "email": "michael.brown@example.com"
  },
  {
    "id": 5,
    "name": "Emily Wilson",
    "email": "emily.wilson@example.com"
  },
  {
    "id": 6,
    "name": "David Lee",
    "email": "david.lee@example.com"
  }
]

app.get('/', (req, res) => {
  res.send('My User M Server is Running!');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
  console.log("Post API is Hitting")
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`My User Management Server listening on port ${port}`);
});