import { openDb } from './controllers/configDB.js';
import {createTable, insertDica, mostraTudo, selectDicaAleatoria,} from './controllers/controller.js';
import express from 'express';
const app = express();
openDb();
createTable();
app.use(express.json());

// CRIAR UMA NOVA DICA
app.post('/create',(req, res)=>{
    insertDica(req.body)
    res.json({
        "statusCode": 200
    })

})
// MOSTRAR TODAS AS DICAS
 app.get('/tudo', async (req, res)=>{
    let respostas = await mostraTudo();
     res.json(respostas)
 });
// RECEBER UMA DICA ALEATÓRIA
 app.get('/tips', async (req, res)=>{
    let pessoa = await selectDicaAleatoria();
     res.json(pessoa)
 });
// ESCUTAR A PORTA 3003 E MOSTRAR UMA MENSAGEM CASO ESTEJA RODANDO.
app.listen(3003, ()=>console.log("api rodando"))