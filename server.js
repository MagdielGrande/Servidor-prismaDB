const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Cors
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));


// ENDPOINTS GENERAALES

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

  app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });

  app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

  app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

//Endpoints para MC

//GET
app.get('/mc', async (req, res) => {
  const allMc =  await prisma.MC.findMany({});
  res.json(allMc);
});

app.get('/mc/:id', async (req, res) => {
  const id = req.params.id;
  const mc = await prisma.MC.findUnique({where: {id: parseInt(id)}});
  res.json(mc);
});

//POST
app.post('/mc', async (req, res) => {
  const explorer = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments:req.body.enrollments

   };
  const message = 'Explorer creado.';
  await prisma.MC.create({data: explorer});
  return res.json({message});
});

//PUT
app.put('/mc/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.MC.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.hasCertification
		}
	})

	return res.json({message: "Actualizado correctamente"});
});
//DELETE
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.MC.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

//ENDPOINSPARA MISSIONCOMANDER

//GET
app.get('/misioncomanders', async (req, res) => {
  const allMcomander =  await prisma.missionCommander.findMany({});
  res.json(allMcomander);
});

app.get('/misioncomanders/:id', async (req, res) => {
  const id = req.params.id;
  const mcomander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
  res.json(mcomander);
});

//POST
app.post('/misioncomanders', async (req, res) => {
  const Mcomander = {
    name: req.body.name,
    username: req.body.username,
    mainStack: req.body.mainStack,
   };
   

  const message = 'Explorer creado.';
  await prisma.missionCommander.create({data: Mcomander});
  return res.json({message});
});

//PUT
app.put('/misioncomanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missionCommander.update({
		where: {
			id: id
		},
		data: {
			mainStack: req.body.mainStack
		}
	})

	return res.json({message: "Actualizado correctamente"});
});
//DELETE
app.delete('/misioncomanders/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.missionCommander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});