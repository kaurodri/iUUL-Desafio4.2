import express from "express";
import cors from "cors";
import { CadastrarCiclista, RecuperarCiclista, AlterarCiclista, AtivarCiclista, CiclistaAlugar, CiclistaBicicleta, index } from "../controllers/control.js";

const routes = (app) => {
  app.use(express.json());
  app.use(cors());

  app.post('/ciclista', CadastrarCiclista);
  app.get('/ciclista', index);
  app.get('/ciclista/:id', RecuperarCiclista);
  app.put('/ciclista/:id', AlterarCiclista);
  app.post('/ciclista/:id/ativar', AtivarCiclista);
  app.get('/ciclista/:id/permiteAluguel', CiclistaAlugar);
  app.get('/ciclista/:id/bicicletaAlugada', CiclistaBicicleta);

};

export default routes;
