const express = require("express")
const exbhs = require("express-handlebars")
const path = require("path")


const app = express()
const {engine } = exbhs

const port = process.env.PORT || 5000
app.engine("handlebars", engine({
    defaultLayout: "main",
    // layoutsDir: path.join(__dirname, "views/test")
}))
 
app.set("view engine", "handlebars")

app.get("/", (req,res) => {
  res.render("home")
})

app.listen(port, () => {
    console.log(`server runnign on port ${port}`)
})