const express = require("express");

const app = express();

const PORT = process.env.PORT;

const path = require("path")

app.listen(PORT, () => {
    console.log("Server is listening on Port" + PORT)
})

app.use(express.static(path.join(__dirname, 'public'), {index : "home.html"}));
