const app = require("express")();

app.listen(3000, () => console.log("Connected to Server"))
app.get("/", (req, res) => {
    res.send("Server  is up")
})

const routes = require("./routes/routes");
