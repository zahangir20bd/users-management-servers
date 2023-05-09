const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Rafiq Ahmed", email: "rafiq@mail.com" },
  { id: 2, name: "Karim Ahmed", email: "karim@mail.com" },
  { id: 3, name: "Rahul Hossain", email: "rahul@mail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management server Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post API is hitting");
  console.log(req.body);
  const newUser = req.body;

  newUser.id = users.length + 1;
  users.push(newUser);

  res.send(newUser);
});

app.listen(port, () => {
  console.log(`user management server running form ${port}`);
});
