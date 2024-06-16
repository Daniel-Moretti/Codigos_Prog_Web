import fastify from "fastify";
import { z } from "zod";

const app = fastify();

app.get("/usuarios/:id", (request, reply) => {

    //Objeto referencia  para validação
    const validParams = z.object({id: z.string()})

    //validando com o objeto referencia criado
    const paramsValidado = validParams.parse(request.params)


  console.log(paramsValidado);

  return "Estamos na listagem de usuarios";
});

app.post("/criarUsuario", (request, reply) => {

    console.log(request.body)

    //Objeto referencia  para validação
    const validBody = z.object({id: z.number(), nome: z.string()})

    //validando com o objeto referencia criado
    const bodyValidado = validBody.parse(request.body)

    console.log(bodyValidado)
    
    return reply.status(201).send("Usuario criado")
    
})

app.listen({ port: 3333 }).then(() => {
  console.log("Servidor esta rodando");
});
