const receitas = require('../models/receitas.json');

const getAll = (req, res) => {
    res.status(200).send(receitas);
};

const getByTitle = (req, res) => {
    const titleReceitas = req.query.titulo
    const titleFilter = receitas.find(receita => receita.titulo.includes(titleReceitas))

    if (titleReceitas === '' || titleFilter === undefined) {
        res.status(404).send({
            'mensage': 'Por favor, insira um título válido'
        })
    } else {
        res.status(200).send(titleFilter);
    }
};

const getByPorcao = (req, res) => {
    const porcaoRequire = req.params.id;
    const porcaoFilter = receitas.find(porcao => porcao.porcoes == porcaoRequire);

    res.status(200).send(porcaoFilter);
};   

const novaReceita = (req, res) => {
    const novoTituloReceita = req.body.titulo;
    const novaFotoReceita = req.body.foto;
    const novasPorcoesReceita = req.body.porcoes;
    const novoTempoReceita = req.body.tempo_preparo;
    const novoIngredientesReceita = req.body.ingredientes;
    const novoPreparoReceita = req.body.modo_preparo;
    
    const novoCadastroReceita = {
        titulo: novoTituloReceita,
        foto: novaFotoReceita,
        porcoes: novasPorcoesReceita,
        tempo_preparo: novoTempoReceita,
        ingredientes: novoIngredientesReceita,
        modo_preparo: novoPreparoReceita,
    }

    receitas.push(novoCadastroReceita);
    res.status(200).send(novoCadastroReceita);

};

const substituirInformacoes = (req, res) => {
    let requererId = req.params.id;
    let escreverNoBody = req.body;

    let filtrarReceitas = receitas.find(receita => receita.id == requererId);

    let updateReceitas ={
        'titulo': escreverNoBody.titulo,
        'foto': escreverNoBody.foto,
        'porcoes': requererId.porcoes,
        'tempo_preparo': escreverNoBody.tempo_preparo,
        'ingredientes': escreverNoBody.ingredientes,
        'modo_preparo': escreverNoBody.modo_preparo,
    }

    const indiceReceitas = receitas.indexOf(filtrarReceitas);
    receitas.splice(indiceReceitas, 1, updateReceitas);
    res.status(200).send({
        'mensagem': 'Informações da receita substituidas com Sucesso <3'
    })
};

const substituirNome = (req, res) =>{
    const requisicaoId = req.params.porcoes;
    let novoNome = req.body;

    let filtrarPorPorcao = receitas.find(receitas => receitas.porcoes == requisicaoId);

    let updateNome ={
        'porcoes': filtrarPorPorcao.porcoes,
        'titulo': novoNome.titulo,
    }

    const indiceDasReceitas = receitas.indexOf(filtrarPorPorcao);
    receita.splice(indiceDasReceitas, 1, updateNome);
    res.status(200).send({
        'mensagem': 'Nome da Receita substituida com Sucesso <3'
    })
    
};

const deletarReceita = (req, res) => {
    const idSolicitado = req.params.porcoes;
    const receitasFiltradas = receitas.find(receitass => receitass.porcoes == idSolicitado)
    const indice = receitas.indexOf(receitasFiltradas)

    receitas.splice(indice, 1);

    res.status(200).send(
        [
            {
                'message': 'Receita deletada com sucesso'
            }
        ]
    )
};

module.exports = {
    getAll,
    getByTitle,
    getByPorcao,
    novaReceita,
    substituirInformacoes,
    substituirNome,
    deletarReceita
}