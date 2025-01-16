import { Sequelize } from "sequelize";

import { ciclistaCreate } from "../models/ciclistaCreate.js";

import dotenv from 'dotenv';
dotenv.config();

// [ Padrão de Singleton ] -> Garante que apenas uma instância de conexão ao banco de dados seja criada.
class DbClient {
    /**
     * @property { Sequelize } vinculo
     */
    #vinculo

    /**
     * @returns { DbClient }
     */
    constructor() {
        
        if (DbClient.instance) return DbClient.instance;
        
        const env = process.env;
        this.#vinculo = new Sequelize(env.DATABASE, env.DB_USER, env.DB_PASSWORD, {
            host: env.DB_HOST,
            logging: false,
            dialect: "postgres",
            timezone: '-03:00'
        });

        this.init();
        DbClient.instance = this;

    }

    init() {
        ciclistaCreate.init(this.#vinculo);
    }

    /**
     * @returns {{sucess: boolean, error?: number}}
     */
    async autenticar() {
        try {
            await this.#vinculo.authenticate();
            return {
                sucess: true
            }
        } catch (error) {
            switch (error.original.code) {
                case '3D000':
                    return {
                        sucess: false,
                        error: "O Banco de Dados não existe"
                    }
                default:
                    return {
                        sucess: false,
                        error: "Erro Desconhecido"
                    }
            }
        }
    }

    get vinculo() {
        return this.#vinculo
    }

}

export default new DbClient();
