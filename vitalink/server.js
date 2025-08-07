const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let data = require("./data.json");

app.get("/api/bloodstock", (req, res) => {
  res.json(data.bloodStock);
});

app.post("/api/register-donor", (req, res) => {
  const donor = req.body;
  data.donors.push(donor);
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
  res.sendStatus(201);
});

app.post("/api/register-hospital", (req, res) => {
  const hospital = req.body;
  data.hospitals.push(hospital);
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
  res.sendStatus(201);
});

app.post("/api/request-blood", (req, res) => {
  const request = req.body;
  data.requests.push(request);
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});