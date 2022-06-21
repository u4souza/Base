const express = require ('express');
const app = express();
const BodyParser = require('body-parser');
const bodyParser = require('body-parser');
const connection = require('./database/database');

//View ENGINE
app.set ('view engine', 'ejs');

//STATIC
app.use(express.static('public'));

//BODY PARSER
app.use(BodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DATA BASE
connection
    .authenticate()
    .then(()=> {
        console.log('Conexão feita com sucesso!');
    }).catch ((error) => {
        console.log('Erro na conexão!');
    });


app.get ('/', (req, res) =>{
    res.render('index');
});






app.listen(8000, ()=> {
    console.log ('App Rodando!')
})