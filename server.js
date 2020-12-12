const express = require("express")
const PORT = process.env.PORT || 3001
const app = express()
app.get("/", (req, res) => {
    res.send("Updating things")
}) 

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
})