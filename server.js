const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "API is live" });
});

app.get("/user/:id", (req, res) => {
    res.json({ id: req.params.id, status: "OK" });
});

app.listen(3000, () => console.log("API"));
