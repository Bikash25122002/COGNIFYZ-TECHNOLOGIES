const express = require('express')
const router = express.Router()



router.route('/').get((req, res) => {
    res.render('index');
})
router.route('/').post(async (req, res) => {
    const { firstname, lastname, email, phone, password, zip,address,state,city } = req.body;
    console.log(req.body);
    res.send('Data received!');
})


    module.exports = router;


