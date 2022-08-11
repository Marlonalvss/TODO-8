import { openDb } from './controllers/configDB.js';
import {createTable, insertDica, mostraTudo, selectDicaAleatoria,} from './controllers/controller.js';
import express from 'express';
const app = express();
openDb();
createTable();
app.use(express.json());


app.post('/create',(req, res)=>{
    insertDica(req.body)
    res.json({
        "statusCode": 200
    })

})

 app.get('/tudo', async (req, res)=>{
    let respostas = await mostraTudo();
     res.json(respostas)
 });

 app.get('/tips', async (req, res)=>{
    let pessoa = await selectDicaAleatoria();
     res.json(pessoa)
 });

app.listen(3003, ()=>console.log("api rodando"))