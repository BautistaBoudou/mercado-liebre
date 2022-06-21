const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
//app.use(express.static("./public"))
//Express busca los archivos relativos al directorio estático, por lo que el nombre del directorio estático no forma parte del URL.
//la carpeta public contiene img, archivos css y javascript, static actúa como middleware

//No obstante, la vía de acceso que proporciona a la función express.static
//es relativa al directorio desde donde inicia el proceso node. Si ejecuta la aplicación Express desde cualquier otro directorio,
//es más seguro utilizar la vía de acceso absoluta del directorio al que desea dar servicio:

app.use(express.static(__dirname + '/public'));

app.listen(PORT,()=>console.log("Este es el inicio"))

