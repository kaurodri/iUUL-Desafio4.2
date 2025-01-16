import { ciclistaCreate } from '../models/ciclistaCreate.js';
import OrdenarCampos from '../classes/OrdenarCampos.js';
import { AluguelAPI } from '../api/aluguel.js';
import { EquipamentoAPI } from '../api/equipamento.js';
import AllErrors from '../classes/RetornarErro.js';
import validarDados from '../classes/ValidarDados.js';

export async function CadastrarCiclista(req, res) {
    try {
        const {
            nome,
            nascimento,
            cpf,
            passaporte: { numero: ppNumero, validade: ppValidade, pais: ppPais },
            nacionalidade,
            email,
            urlFotoDocumento
        } = req.body.ciclista;

        const ReceberDados = {
            nome,
            nascimento,
            cpf,
            ppNumero,
            ppValidade,
            ppPais,
            nacionalidade,
            email,
            urlFotoDocumento
        };

        const validar = await validarDados.validarObjetoCiclista(ReceberDados);
        if(validar) {
            const Erro = AllErrors.retorne(422);
            return res.status(422).json(Erro);
        };

        const CriarNovoCiclistaNoBanco = await ciclistaCreate.create(ReceberDados);

        const ModeloConvertidoParaObjeto = CriarNovoCiclistaNoBanco.get({ plain: true });

        const ordenar = new OrdenarCampos();
        const camposOrdenados = ordenar.ciclistaCreate(ModeloConvertidoParaObjeto);

        res.status(201).json(camposOrdenados);

    } catch (error) {
        if (error.response) {
            const Erro = AllErrors.retorne(error.response.status);
            res.status(error.response.status).json(Erro);
        }
        res.status(500).json({ error: 'Erro ao cadastrar ciclista' });
    }
};

export async function RecuperarCiclista(req, res) {
    try {
        const { id } = req.params;
        const ciclista = await ciclistaCreate.findByPk(id);

        if (!ciclista) {
            const Erro = AllErrors.retorne(404);
            return res.status(404).json(Erro);
        };

        return res.status(200).json(ciclista);

    } catch (error) {
        if (error.response) {
            const Erro = AllErrors.retorne(error.response.status);
            res.status(error.response.status).json(Erro);
        }
        res.status(500).json({ error: 'Erro ao recuperar ciclista' });
    }
};

export async function AlterarCiclista(req, res) {
    try {
        const {
            nome,
            nascimento,
            cpf,
            passaporte: { numero: ppNumero, validade: ppValidade, pais: ppPais },
            nacionalidade,
            email,
            urlFotoDocumento
        } = req.body.ciclista;

        const ReceberDados = {
            nome,
            nascimento,
            cpf,
            ppNumero,
            ppValidade,
            ppPais,
            nacionalidade,
            email,
            urlFotoDocumento
        };

        const validar = await validarDados.validarObjetoCiclista(ReceberDados);
        if(validar) {
            const Erro = AllErrors.retorne(422);
            return res.status(422).json(Erro);
        };

        const { id } = req.params;
        const ciclista = await ciclistaCreate.findByPk(id);

        if (!ciclista) {
            const Erro = AllErrors.retorne(404);
            return res.status(404).json(Erro);
        };

        await ciclistaCreate.update(ReceberDados,
            {
                where: {
                    id: id,
                },
            }
        );

        return res.status(200).json({ message: "Dados atualizados" });

    } catch (error) {
        if (error.response) {
            const Erro = AllErrors.retorne(error.response.status);
            res.status(error.response.status).json(Erro);
        }
        res.status(500).json({ error: 'Erro ao alterar ciclista' });
    }
}

export async function AtivarCiclista(req, res) {
    try {
        const { id } = req.params;
        const ciclista = await ciclistaCreate.findByPk(id);

        if (!ciclista) {
            const Erro = AllErrors.retorne(404);
            return res.status(404).json(Erro);
        };

        await ciclistaCreate.update(
            { status: "ATIVO" },
            {
                where: {
                    id: id,
                },
            }
        );

        return res.status(200).json({ message: "Ciclista ativado" });

    } catch (error) {
        if (error.response) {
            const Erro = AllErrors.retorne(error.response.status);
            res.status(error.response.status).json(Erro);
        }
        res.status(500).json({ error: 'Erro ao ativar ciclista' });
    }
}

export async function CiclistaAlugar(req, res) {
    try {
        const { id } = req.params;
        const ciclista = await ciclistaCreate.findByPk(id);

        if (!ciclista) {
            const Erro = AllErrors.retorne(404);
            return res.status(404).json(Erro);
        };

        const TodosAlugueis = await AluguelAPI.getAluguel();

        function encontrar(array, id) {
            return array.find(campo => campo.ciclista === id);
        }

        const AluguelEncontrado = encontrar(TodosAlugueis, Number(id));

        if (AluguelEncontrado) {
            return res.status(200).json(false);
        } else {
            return res.status(200).json(true);
        }

    } catch (error) {
        if (error.response) {
            const Erro = AllErrors.retorne(error.response.status);
            res.status(error.response.status).json(Erro);
        }
        res.status(500).json({ error: 'Erro ao verificar aluguel do ciclista' });
    }
}

export async function CiclistaBicicleta(req, res) {
    try {
        const { id } = req.params;
        const ciclista = await ciclistaCreate.findByPk(id);

        if (!ciclista) {
            const Erro = AllErrors.retorne(404);
            return res.status(404).json(Erro);
        };

        const TodosAlugueis = await AluguelAPI.getAluguel();

        function encontrar(array, id) {
            return array.find(campo => campo.ciclista === id);
        }

        const ciclistaEncontrado = encontrar(TodosAlugueis, Number(id));

        if (!ciclistaEncontrado) {
            return res.status(500).json({ error: 'Ciclista ainda não alugou uma bicicleta' });
        }

        function encontrarBike(array, id) {
            return array.find(campo => campo.id === id);
        }

        const Bicicletas = await EquipamentoAPI.getBicicletas();

        const Bicicleta = encontrarBike(Bicicletas, Number(ciclistaEncontrado.bicicleta));

        return res.status(200).json(Bicicleta);

    } catch (error) {
        if (error.response) {
            const Erro = AllErrors.retorne(error.response.status);
            res.status(error.response.status).json(Erro);
        }
        res.status(500).json({ error: 'Erro ao verificar bicicleta do ciclista' });
    }
}

export async function index(req, res) {
    const users = await ciclistaCreate.findAll();

    return res.status(200).json(users);
}
