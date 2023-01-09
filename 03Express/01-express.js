const express = require('express')
const app = express()
const port = 3005

//Motor de plantillas
app.set("views", __dirname + '/views');
app.set("view engine", 'ejs');


//Middleware
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("index", {titulo: "mi titulo dinamico"})
  })

app.get('/contacto', (req, res) => {
    res.render("contacto", {tituloContacto: "Estamos en contacto de manera dinamica"})
})

app.use((req,res) => {
    res.status(404).render("404", {titulo: "ERROR 404", descripcion: "Page Not Found"})
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




