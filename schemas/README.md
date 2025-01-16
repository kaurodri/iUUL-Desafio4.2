### Microserviço → ALUGUEL

| Kauan Rodrigues                                |                                                                       |
|------------------------------------------------|-----------------------------------------------------------------------|
| POST /ciclista                                 | Cadastrar um ciclista                                                 |
| GET /ciclista/{idCiclista}                     | Recupera dados de um ciclista                                         |
| PUT /ciclista/{idCiclista}                     | Alterar dados de um ciclista                                          |
| POST /ciclista/{idCiclista}/ativar             | Ativar cadastro do ciclista                                           |
| GET /ciclista/{idCiclista}/permiteAluguel      | Verifica se o ciclista pode alugar uma bicicleta                      |
| GET /ciclista/{idCiclista}/bicicletaAlugada    | Obtém bicicleta alugada por um ciclista                               |

| Julia Costa                                    |                                                                       |
|------------------------------------------------|-----------------------------------------------------------------------|
| GET /ciclista/existeEmail/{email}              | Verifica se o e-mail já foi utilizado por algum ciclista              |
| GET /funcionario                               | recupera funcionários cadastrados                                     |
| POST /funcionario                              | Cadastrar funcionário                                                 |
| GET /funcionario/{idFuncionario}               | Recupera funcionário                                                  |
| PUT /funcionario/{idFuncionario}               | Editar funcionário                                                    |
| DELETE /funcionario/{idFuncionario}            | Remover funcionário                                                   |

| Juliana Sousa                                  |                                                                       |
|------------------------------------------------|-----------------------------------------------------------------------|
| GET /cartaoDeCredito/{idCiclista}              | Recupera dados de cartão de crédito de um ciclista                    |
| PUT /cartaoDeCredito/{idCiclista}              | Alterar dados de cartão de crédito de um ciclista                     |
| POST /aluguel                                  | Realizar aluguel                                                      |
| POST /devolucao                                | Realizar devolução                                                    |
