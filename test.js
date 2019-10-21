const express = require("express"); // tạo ra một biến express requires thư viện express
const app = express();// tạo ra một web

let port = 3000 || process.env.PORT;
app.listen(port, function(err) {
    if(err) console.log(err)
    console.log("start at ", port)
})

app.get("/user", (req, res) => {//api
    res.send({mess : "day la trang chu"})
})

app.post("/user", (req, res) => {//api
    res.send({mess : "day la post"})
})