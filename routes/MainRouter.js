// exports.getMain = (req, res)=>{
//     console.log("GET REQUEST TO /");
//     // response.send("hellow"); ===> SENDING TEXT
//     // response.send({id:0, name:"John"}) ===> SENDING OBJECT
//     // response.sendFile(path.join(__dirname, "about.html")); ==>SENDING FILE
//     res.render("main")
// } ==> disarda kullanmak adina export etmeliyim.

const express = require("express");
// expressi burda da cekiyorum ki routerini kullanabileyim. expressiz routyeri kullanamam.
const router = express.Router();
/* 
path :  / 
*/
 
// localhost:5000/?name=Oliver
//{req.query.name} ile main dosyasina name = oliver seklinde gonderir.

//routerin kendinden get requestini cagiriyorum.
router.get("/", (req, res) => {
  
  res.render("main", {name: req.query.name}); //==> ilk acildiginda views templatelerinin icinden main.jsi render etmemizi sagliyor.
}); 

// res.render("main", {name: "John"}); //==> ilk acildiginda views templatelerinin icinden main.jsi render etmemizi sagliyor.
// }); //==> name propsini main dosyasinin icine ilgili yere yazdirir. 
router.post("/", (req, res) => {
  res.send("post");
});

module.exports = router;
//export default router ile ayni islevde.