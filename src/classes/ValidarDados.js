class ValidarDados {

  validarObjeto(obj) {
    if (obj === null || typeof obj !== 'object') {
      return false;
    }

    for (const chave in obj) {
      if (obj.hasOwnProperty(chave)) {
        if (obj[chave] === null || obj[chave] === undefined) {
          return false;
        }
      }
    }
    return true;
  }

  verificarCPF(CPF) {
    if (CPF.length !== 11 || /^(\d)\1{10}$/.test(CPF)) {
      return false
    };

    function calcularDigitoVerificador(CPF, multiplicadores) {
      let soma = 0;
      for (let i = 0; i < CPF.length; i++) {
        soma += parseInt(CPF[i]) * multiplicadores[i];
      }
      let resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const tabela = {
      multiplicadoresJ: [10, 9, 8, 7, 6, 5, 4, 3, 2],
      multiplicadoresK: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    };

    const primeiroDV = calcularDigitoVerificador(CPF.slice(0, 9), tabela.multiplicadoresJ);
    const segundoDV = calcularDigitoVerificador(CPF.slice(0, 10), tabela.multiplicadoresK);

    let verificar = CPF[9] == primeiroDV && CPF[10] == segundoDV;

    return verificar;
  }

  async validarObjetoCiclista(obj) {
    const objeto = this.validarObjeto(obj);

    const CPF = obj.cpf;
    const NACIONALIDADE = obj.nacionalidade;

    const PASSAPORTE = {
      numero: obj.ppNumero,
      validade: obj.ppValidade,
      pais: obj.ppPais
    }

    if (NACIONALIDADE == 'BRASILEIRO') {
      if (this.verificarCPF(CPF) && objeto) return false;
    };

    if (NACIONALIDADE == 'ESTRANGEIRO') {

      async function verificarCampos(objeto) {
        for (const chave in objeto) {
          if (objeto[chave] === '') {
            return false;
          }
        }
        return true;
      }
      const verificar = await verificarCampos(PASSAPORTE);
      if (verificar && objeto) return false;

    };

    return true;

  }

};

const validarDados = new ValidarDados();

export default validarDados;
