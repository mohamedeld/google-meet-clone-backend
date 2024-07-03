const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const linkSecret = 'welasdfasf-sdf98fasfdasf'

router.get("/user-link",(req,res)=>{
  const appData={
    professionalFullName:"mohamed",
    appDate:Date.now(),
  }

  const token = jwt.sign(appData,linkSecret)
  res.send(`http://localhost:3000/join-video?token=${token}`)
  // res.json("test")
})
router.get("/validate-data",(req,res)=>{
  const token = req.query.token;
  const decodedData = jwt.verify(token,linkSecret);
  res.json(decodedData)
})
module.exports = router;