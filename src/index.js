const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/orders", async (req, res) => {
  const users = await fetch("http://user-service/users").then(r => r.json());
  const payments = await fetch("http://payment-service/payments").then(r => r.json());

  res.json({ users, payments });
});

app.listen(7001, () => console.log("backend running"));
