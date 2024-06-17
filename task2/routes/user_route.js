const express = require('express')
const router = express.Router()



router.route('/').get((req, res) => {
    res.render('index');
})
router.route('/').post(async (req, res) => {
    const { name, username, email, phone, password, cpassword } = req.body;
    console.log(req.body);
    try {
        if (password == cpassword) {
            
            res.send('Form submitted successfully!');
        }
        else{
            res.send('password does not match!');
        }

    } catch (error) {
        console.log(error) 
        res.send('invalid successful!');
    }
})


    module.exports = router;


