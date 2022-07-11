const express = require("express");
const app = express();
const path = require("path")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is listening on Port" + PORT)
})

app.use(express.static(path.join(__dirname, 'public'), {index : "home.html"}));
