import 'dotenv/config.js';
import app from './src/app.js';

//definindo porta, a 3000 é de uso geral
const PORT = 3000;


//iniciando o servidor em uma porta especifica
app.listen(PORT, ()=>{
    console.log("servidor escutando");
});