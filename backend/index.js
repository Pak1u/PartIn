const express = require('express')
const middleware = require('./middleware/index.js')
const loginRouter = require('./routes/login.js')


const app = express()
const router = express.Router();
app.use(router);

router.get('/', (req,res)=> {
    res.send("Welcome to PartIn");
});

app.use('/login', loginRouter);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});











