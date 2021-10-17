import { PrismaClient } from '@prisma/client';

let prisma = (() => {
  let prismaCLI;

  if (process.env.NODE_ENV === 'production') {
    prismaCLI = new PrismaClient();
  } else {
      
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prismaCLI = global.prisma;
  }

  return prismaCLI
})();

export default prisma;