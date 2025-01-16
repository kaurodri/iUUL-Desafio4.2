import express from "express";
import routes from "./routes/rota.js";
import DbClient from "./db/SequelizeConnection.js";

const app = express();
const porta = process.env.PORT || 8000;
routes(app);

DbClient.init();
const res = await DbClient.autenticar();
if (res.sucess) {
    DbClient.vinculo.sync({ force: true }).then(() => {

        console.log(`Banco de Dados sincronizado.`);
        app.listen(porta, () => console.log(`Servidor atuando em: http://localhost:${porta}`));

    }).catch(error => console.error(`Erro na sincronização: ${error}`));
};
