const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("Hi to login");
    res.status(200).send("Welcome to login");
});

module.exports = router;