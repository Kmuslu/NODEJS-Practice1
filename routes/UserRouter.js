// exports.getUser = (req, res)=>{
//     res.render("main")
// }

const express = require("express");
const router = express.Router();

const data = require("../models/data");
/* 
path :  /user
*/
// router.get("/", (req, res) => {
//   res.send("user list ");
// });

router.get("/", (req, res) => {
  res.render("user", {users: data.userList, id:""});
});

// router.get("/add", (req, res) => {
//   res.send("User Add");
// });

router.get("/:id", (req, res) => {
  res.render("user", { users: data.userList, id: req.params.id });
}); // ==> 


module.exports = router;