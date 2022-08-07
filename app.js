const express=require("express")
const app = express()
const path= require("path")
app.set("port", 3000)

app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(app.get("port"), ()=> {
    console.log(`Aplicacion  corriendo en port ${app.get("port")}`)
})

