const GO = require('./GO.js')
const express = require('express')
const app = express()
app.use(express.static("public"))

app.post('/api', (req, res) => {
    GO.getStops().then(data => {
        res.json({
            status: 'success',
            data: data 
        })
    })
})

app.listen(3000, () => console.log("Listening on port 3000"))
