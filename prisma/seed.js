const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });
    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Java'
        },
      });
      const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
          name: 'Woopa 5',
                  username: 'ajolonauta5',
                  mission: 'Node'
        },
      });
      const woopa6 = await prisma.explorer.upsert({
        where: { name: 'Woopa 6' },
        update: {},
        create: {
          name: 'Woopa 6',
                  username: 'ajolonauta6',
                  mission: 'Node'
        },
      });

      const MC1 = await prisma.MC.upsert({
        where: { name: 'AJO 1' },
        update: {},
        create: {
          name: 'AJO 1',
          lang: 'Español',
          missionCommander: 'Node',
          enrollments: 3
        },
      });

      const MC2 = await prisma.MC.upsert({
        where: { name: 'AJO 2' },
        update: {},
        create: {
          name: 'AJO 2',
          lang: 'Español',
          missionCommander: 'Node',
          enrollments: 2
        },
      });
      
      const MC3 = await prisma.MC.upsert({
        where: { name: 'AJO 3' },
        update: {},
        create: {
          name: 'AJO 3',
          lang: 'Español',
          missionCommander: 'Java',
          enrollments: 9
        },
      });

      //REGISTROS PARA missionComnader

      const missionComander = await prisma.missionCommander.upsert({
        where: { name: 'Pepe 1' },
        update: {},
        create: {
          name: 'Pepe 1',
          username: 'pepe_1_user',
          mainStack: 'Java',
        },
      });
      const missionComander2 = await prisma.missionCommander.upsert({
        where: { name: 'Pepe 2' },
        update: {},
        create: {
          name: 'Pepe 2',
          username: 'pepe_2_user',
          mainStack: 'Java',
        },
      });
      const missionComander3 = await prisma.missionCommander.upsert({
        where: { name: 'Pepe 3' },
        update: {},
        create: {
          name: 'Pepe 3',
          username: 'pepe_3_user',
          mainStack: 'Node',
        },
      });
    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();