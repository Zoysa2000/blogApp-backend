
const express=require("express")
const Register=require("../Database/Model/userReg")

const router=express.Router();
//send data to MongoDB database
router.post('/', async (req, res) => {
    try {
    const email = req.body.email;
     const user = await Register.findOne({ 'email':email });
     if (user) {
      res.status(201).json({ alertmessage: 'Please select another email address as the one provided is already associated with an existing account.', data:{
        user
      } });
      } else {
      const user = new Register(req.body);
      // Save the user to the database
      let result = await user.save();
      res.status(200).json({ donemessage: 'Your Registration successful, Login IntelleWave', data: {
        result
      } });
      }
    } catch (error) {
      console.log(error)
    }
  });

module.exports = router;