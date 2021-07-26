# API REST DE RECEITAS

Demandas de negócio

- Rota principal pra visualizar a apresentação do projeto [ok]
- Visualizar todas as receitas [ok]
- Visualizar as receitas por nome [ok]
- Vsualizar as receitas por id [ok]
- Adicionar uma nova receita [ok]
- Alterar os dados de uma receita [ok]
- Atualizar o nome de uma receita [ok] 
- Deletar uma receita [ok]


## API Reference

#### Get all items

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Receitas` | `String` | **Required**. Todas as Receitas |

#### Get name

```http
  GET /receitas/nome
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Nome`      | `String` | **Required**. Nomes das Receitas |

#### Get Id

```http
  GET /receitas/porcao${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `Number` | **Required**. Buscar receitas por porções|

#### Add Recipes

```http
  POST /receitas/cadastrar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Cadastrar`      | `String` | **Required**. Cadastrar nova Receita |

#### Change recipe data

```http
  PUT /receitas/substituir${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Substituir`      | `String` | **Required**. Substituir informações da receita |

#### Change recipe name

```http
  PATCH /receitas/substituir/nome${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Substituir`      | `String` | **Required**. Substituir nome de uma receita|


#### Delete recipe

```http
  DELETE /receitas/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `Number` | **Required**. Deletar receitas por ID|