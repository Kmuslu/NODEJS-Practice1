const express = require("express");
const port = process.env.port || 5000;
//process.env.port dedigimde farkli browser ve programlarda calismasini da sagliyorum.
// port = 5000 benim kendi localime esit. localhost:5000
const app = express();
const path = require("path");

const MainRouter = require("./routes/MainRouter");
const UserRouter = require("./routes/UserRouter")

app.set("view engine", "ejs");
app.set("new", path.join(__dirname, "views"));

app.use("/", MainRouter);
app.use("/user", UserRouter);

// app.get("/", MainRouter.getMain);
// path ile get requestinin match etmesi durumunda arrow function calisir. 
// app.get("./user", UserRouter.getUser);

// app.get("/", (req, res)=>{
//     console.log("GET REQUEST TO /");
//     // response.send("hellow"); ===> SENDING TEXT
//     // response.send({id:0, name:"John"}) ===> SENDINT OBJECT
//     // response.sendFile(path.join(__dirname, "about.html")); ==>SENDING FILE
//     res.render("main")
// })


// NODEMON KURUMU
// yapilan degisiklikten sonra normalde tekrar kapatik acmak gerekiyor. ama nodemon kurunca kendisi degisikliklerden sonra otomatik calisiyor. npm install --save-dev

app.listen(5000, () => {
    console.log(`I'm listening on port ${port}`)
})