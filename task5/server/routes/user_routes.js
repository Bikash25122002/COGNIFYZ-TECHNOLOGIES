const express = require('express')
const router = express.Router()



router.route('/').post(async (req, res) => {
   try {
    const { firstname, lastname, email,password, zip, address, state, city } = req.body;
    console.log(req.body);
    res.send('Data received!');
   } catch (error) {
    console.log(error)
   }
})


module.exports = router;


