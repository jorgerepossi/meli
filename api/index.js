const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
app.use(require("./routes/index"));

app.listen(port, () => {
  console.log("App cool");
});
