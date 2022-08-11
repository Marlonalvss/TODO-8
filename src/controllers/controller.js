import { openDb } from "./configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS tips (id INTEGER PRIMARY KEY, dica TEXT)')
    })
}
export async function insertDica(tips){
    openDb().then(db=>{
        db.run('INSERT INTO tips (dica) VALUES (?)', [tips.dica]);
    });
}
export async function selectDicaAleatoria(id){
    let numero = Math.floor(Math.random() * 5)
    return openDb().then(db=>{
        return db.get(`SELECT dica FROM tips WHERE id=${numero}`)
        .then(res=>res)
    });
}

export async function mostraTudo(){
    return openDb().then(db=>{
        return db.all('SELECT id, dica FROM tips')
        .then(res=>res)
    });
}