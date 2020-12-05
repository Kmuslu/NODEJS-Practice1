// exports.getMain = (req, res)=>{
//     console.log("GET REQUEST TO /");
//     // response.send("hellow"); ===> SENDING TEXT
//     // response.send({id:0, name:"John"}) ===> SENDING OBJECT
//     // response.sendFile(path.join(__dirname, "about.html")); ==>SENDING FILE
//     res.render("main")
// }

const express = require("express");
const router = express.Router();
/* 
path :  / 
*/
router.get("/", (req, res) => {
  res.render("main"); //==> ilk acildiginda views templatelerinin icinden main.jsi render etmemizi sagliyor.
});
router.post("/", (req, res) => {
  res.send("post");
});

module.exports = router;