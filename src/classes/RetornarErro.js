class RetornarErro {
    retorne(status) {

        const erro404 = {
            codigo: '404',
            mensagem: 'Requisição mal formada.'
        };

        const erro422 = [
            {
                codigo: '422',
                mensagem: 'Dados inválidos.'
            }
        ];

        const erro500 = {
            codigo: '500',
            mensagem: 'Algo deu errado.'
        };

        if (status === 404) {
            return erro404
        } else if (status === 422) {
            return erro422
        } else {
            return erro500
        }
    };

};

const AllErrors = new RetornarErro();

export default AllErrors;
