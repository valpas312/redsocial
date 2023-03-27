const Express = require("express");

const app = Express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});