const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModel = require('../model/user_model');
const userDetailsModel = require('../model/UserDetails_model');
const jwt = require('jsonwebtoken');
const auth=require("../middleware/auth_middleware")


// register
router.route('/').post(async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    console.log(req.body);

    const useremail = await userModel.findOne({ email: email });
    if (useremail) {
      return res.status(409).send("User already exists");
    }
    if (password === cpassword) {
      const newUser = new userModel({
        name: name,
        email: email,
        password: password,
        cpassword: cpassword,
      });
      await newUser.save();
      const jwtToken = await newUser.getjwttoken();
      console.log(jwtToken);
      res.cookie("Token", jwtToken, {
        httpOnly: true,
        withCredentials: true,

      })
       console.log("Cookie sent");
      return res.send('Data received!');
    } else {
      return res.status(400).send("Password does not match");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
});

// login
router.route('/login').post(async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(401).send("Invalid Email");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("passwordMatch:", passwordMatch);
    if (!passwordMatch) {
      return res.status(401).send("Invalid  Password");
    }

    const jwtToken = await user.getjwttoken();
    console.log(jwtToken);
    res.cookie("Token", jwtToken, {
      httpOnly: true,
      withCredentials: true,
    })
    return res.status(200).send("Logged in Successfully");

  } catch (error) {
    console.log("error", error);
    return res.status(500).send("Internal Server Error");
  }
});
// user profile details
router.route('/userdetails').get(auth,async (req, res) =>{
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log(error)
  }
})
router.route('/userdetails').post(async (req, res) => {
  const { name, username, zip, address, phone, state, city } = req.body
  console.log(req.body)

  try {
    const userDetail = new userDetailsModel({
      name: name,
      username: username,
      address: address,
      phone: phone,
      zip: zip,
      city: city,
      state: state
    })
    await userDetail.save()
    return res.status(200).send("Details added successfully")

  } catch (error) {
    console.log(error)
    return res.status(500).send("Error In Updating User Details")
  }

})


// profile
router.route('/userprofile').get(auth,async (req, res) =>{
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
