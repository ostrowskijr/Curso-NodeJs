const express = require("express"); // Importanto o Express
const app = express(); // Instanciando o Express

app.get("/", function(request, response){
    response.send("<h1>Bem vindo ao projeto Inicial NodeJs + ExpressJs</h1>");
});

app.get("/blog/:artigo?", function(request, response){
    // Para criação de parâmetro opcional deve ser incluido o carater ?
    var artigo = request.params.artigo;
    if (artigo){
        response.send("<h2>Artigo: " + artigo + "</h2>");
    } else {
        response.send("<h2>Bem vindo ao meu Blog! www.devostrowskijr.com.br</h2>");
    }
})

app.get("/video/youtube", function(request, response){
    // Query param pode ser acessa da duas formas a seguir...
    // Exemplo de URL: http://localhost:3000/video/youtube?canal=isadora&nome=luis
    var canal = request.param("canal");
    var nome = request.query["nome"];
    response.send("<h1>Bem vindo ao meu canal do Youtube...</h1> Canal: " + canal + " Nome: " + nome);
})

app.get("/ola/:nome/:empresa", function(request, response){
    // request: Dados enviados por params pelo usuário
    // response: Retorno de dados para o usuário
    // Nesta rota todos os parâmetros são obrigatórios.
    var nome = request.param("nome");
    var empresa = request.params.empresa;
    response.send("Ola: " + nome + " do " + empresa);
})

app.listen(3000, function(error){
    if (error){
        console.log("Ocorreu um erro ao iniciar o Servidor!");
        
    } else {
        console.log("Servidor iniciado com sucesso!");
        
    }
});