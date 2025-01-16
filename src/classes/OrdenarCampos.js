class OrdenarCampos {

    ciclistaCreate(objeto) {
        const response = {
            id: objeto.id,
            status: objeto.status,
            nome: objeto.nome,
            nascimento: objeto.nascimento,
            cpf: objeto.cpf,
            passaporte: {
                numero: objeto.ppNumero,
                validade: objeto.ppValidade,
                pais: objeto.ppPais
            },
            nacionalidade: objeto.nacionalidade,
            email: objeto.email,
            urlFotoDocumento: objeto.urlFotoDocumento
        }
        return response;
    };

};

export default OrdenarCampos;
