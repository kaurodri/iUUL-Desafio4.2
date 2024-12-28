# Cadastro de Ciclista

Requisição → `POST /ciclista`

### Corpo da requisição
Informação enviada para o servidor
```json
{
  "ciclista": {
    "nome": "string",
    "nascimento": "2024-12-28",
    "cpf": "84861567279",
    "passaporte": {
      "numero": "string",
      "validade": "2024-12-28",
      "pais": "EP"
    },
    "nacionalidade": "string",
    "email": "user@example.com",
    "urlFotoDocumento": "string",
    "senha": "string"
  },
  "meioDePagamento": {
    "nomeTitular": "string",
    "numero": "788450161855063581285760739535616225356497475794982749159627181370",
    "validade": "2024-12-28",
    "cvv": "7945"
  }
}
```

### Código 201  - Ciclista Cadastrado com Sucesso
Isso significa que o cadastro do ciclista foi feito corretamente. O servidor devolve os dados de volta com um id único.
```json
{
  "id": 0,
  "status": "string",
  "nome": "string",
  "nascimento": "2024-12-28",
  "cpf": "28495766103",
  "passaporte": {
    "numero": "string",
    "validade": "2024-12-28",
    "pais": "HP"
  },
  "nacionalidade": "string",
  "email": "user@example.com",
  "urlFotoDocumento": "string"
}
```

### Código 404 - Requisição Mal Formada
Isso significa que houve algum erro na sua solicitação. O servidor retorna uma mensagem explicando qual foi o problema.
```json
{
  "codigo": "string",
  "mensagem": "string"
}
```
### Código 422 - Dados Inválidos
Isso significa que os dados enviados não são válidos. O servidor retorna uma lista de mensagens explicando quais foram os problemas.
```json
[
  {
    "codigo": "string",
    "mensagem": "string"
  }
]
```
