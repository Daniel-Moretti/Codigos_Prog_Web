import http from 'node:http'

//Metodos HTTP
// GET - Buscar resursos no back-end
// POST - Criar recursos no back-end
// PUT - Atualizar recursos no back-end
// DELETE - Deletar um recurso no back-end
// PATCH - Atualizar um recurso especificos no back-end

//Statefull e Stateless 

const users = []; // [] -> array

const server = http.createServer( (request, response) => {

    const {method, url} = request;

    if(method == 'GET' && url == '/users'){

        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))

    }

    if(method == 'POST' && url == '/users'){

        
        users.push(
            {
                id : 2,
                nome : "Daniel Moretti"
            }
        )

        return response.writeHead(201).end("Adicionado com Sucesso");

    }

    return response.writeHead(404).end();

} )

server.listen(3333, () => {
    console.log(`Servidor rodando em http://localhost:3333/`);
})