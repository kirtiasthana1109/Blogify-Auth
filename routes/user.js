
const express = require("express");   // yahan express ko import karo
const router = express.Router();      // fir router banao
const User = require("../models/user");

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

 router.post("/signin", async(req,res)=> {
    const{email,password}=req.body;
    const user =await User.matchPassword(email,password);
   console.log("User",user);
   return res.redirect("/");  

})

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

 
  await User.create({
    fullName,
    email,
    password,
  });

  return res.redirect("/");
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");

// // Signin form render
// router.get("/signin", (req, res) => {
//   return res.render("signin");
// });

// // Signup form render
// router.get("/signup", (req, res) => {
//   return res.render("signup");
// });

// // Signup form submit
// router.post("/signup", async (req, res) => {
//   const { fullName, email, password } = req.body;

//   await User.create({
//     fullName,
//     email,
//     password,
//   });

//   return res.redirect("/");
// });

// // Signin form submit
// router.post("/signin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.matchPassword(email, password);  // await zaroori hai
//     console.log("User", user);

//     return res.redirect("/");
//   } catch (error) {
//     console.error(error.message);
//     return res.status(401).send("Invalid credentials");
//   }
// });

// module.exports = router;
