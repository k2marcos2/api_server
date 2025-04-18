import expres from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors('http://localhost:5173'));

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            senha: req.body.age
        }
    })

    res.status(201).json(req.body);
});

app.get('/users', async (req, res) => {
    
    let users = [];

    if (req.query) { 
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
        return res.status(200).json(users);
    }else{

        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }

});

app.put('/users/:id', async (req, res) => {
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(201).json(req.body);
});

app.delete('/users/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso"});
});
// crud categoria
app.post('/categorias', async (req, res) => {

    await prisma.categoria.create({
        data: {
            descricao: req.body.descricao,
            status: req.body.status
        }
    })

    res.status(201).json(req.body);
});

app.get('/categorias', async (req, res) => {
    
    let categorias = [];

    if (req.query) { 
        categorias = await prisma.categoria.findMany({
            where: {
                descricao: req.query.descricao,
                status: req.query.status,
                questoes:{
                    get:{
                        questao: res.query.questao,
                        alternativa:{
                            alternativa: res.query.alternativa
                        },
                    },
                }
            }
        })
        return res.status(200).json(categorias);
    }else{

        const categorias = await prisma.categoria.findMany();
        res.status(200).json(categorias);
    }

});
app.put('/categorias/:id', async (req, res) => {
    
    await prisma.categoria.update({
        where: {
            id: req.params.id
        },
        data: {
            descricao: req.body.descricao,
            status: req.body.status
            
        }
    })

    res.status(201).json(req.body);
});
//crud qestões
app.post('/questoes', async (req, res) => {

    await prisma.categoria.create({
        data: {
            questao: req.body.questao
        }
    })

    res.status(201).json(req.body);
});

app.get('/questoes', async (req, res) => {
    
    let questoes = [];

    if (req.query) { 
        questoes = await prisma.questao.findMany({
            where: {
                questoes: req.query.questoes,
                alternativa:{
                    get:{ 
                        alternativa: res.query.alternativa

                    }
                },
            }
                
        })
        return res.status(200).json(questoes);
    }else{

        const questoes = await prisma.questao.findMany();
        res.status(200).json(questoes);
    }

});
app.put('/questoes/:id', async (req, res) => {
    
    await prisma.questao.update({
        where: {
            id: req.params.id
        },
        data: {
            questoes: req.body.questoes
            
        }
    })

    res.status(201).json(req.body);
});
//crud alternativas
app.post('/alternativas', async (req, res) => {

    await prisma.alternativa.create({
        data: {
            alternativa: req.body.alternativa
        }
    })

    res.status(201).json(req.body);
});

app.get('/alternativas', async (req, res) => {
    
    let alternativas = [];

    if (req.query) { 
        alternativas = await prisma.alternativa.findMany({
            where: {
                alternativa: req.query.alternativa
            }
        })
        return res.status(200).json(alternativas);
    }else{

        const alternativas = await prisma.alternativa.findMany();
        res.status(200).json(alternativas);
    }

});
app.put('/alternativas/:id', async (req, res) => {
    
    await prisma.alternativa.update({
        where: {
            id: req.params.id
        },
        data: {
            alternativa: req.body.alternativa
            
        }
    })

    res.status(201).json(req.body);
});




app.listen(7568)