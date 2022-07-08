const express = require("express")
const dotenv = require("dotenv")
const db = require("./db/connect")
const path=require("path")

dotenv.config({
    path:"./config/config.env"
})
db()
const app = express()



app.use(express.urlencoded({extended:false}))
//json parser
app.use(express.json([]))
app.use(express.json({
    extended:true
}))

const static_path=__dirname

//To Access All atatic Pages
app.use(express.static(static_path))


app.use("/",require("./routes/routes"))


const port=process.env.PORT ||3000

app.listen(port, console.log(`server is started on port ${port}`))