const cors = require('cors');

const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 8085;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("hello Anand")
})

app.use('/api/auth/', require('./routes/auth'))



app.listen(port, () => {
    console.log(`News App listening at http://localhost:${port}`)
})