const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  console.log(`pinged with payload ${JSON.stringify(req.query)}`);
  res.send(`pinged with payload ${JSON.stringify(req.query)}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
