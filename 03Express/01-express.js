const express = require('express')
const bodyParser  = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


require('dotenv').config()
const port = process.env.PORT || 3005

//Conexión a base de datos
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
const uri = `mongodb+srv://${process.env.DB_USSER}:${process.env.DB_PASSWORD}@cluster0.eg1v6lz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))


//Middleware
app.use(express.static(__dirname + '/public'));

//Motor de plantillas
app.set("views", __dirname + '/views');
app.set("view engine", 'ejs');


app.use('/', require('./router/rutas'))
app.use('/pokemon', require('./router/pokemon'))



app.use((req,res) => {
    res.status(404).render("404", {titulo: "ERROR 404", descripcion: "Page Not Found"})
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




