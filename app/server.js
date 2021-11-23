const express = require("express");
const { sequelize } = require("./model");
const router = require("./routes/root.routers");
const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

sequelize.sync({ alter: true });
