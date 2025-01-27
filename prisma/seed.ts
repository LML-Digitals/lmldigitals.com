import { PrismaClient } from "@prisma/client";
import { staffData } from "./staffSeed";
import { customerData } from "./customerSeeds";

const prisma = new PrismaClient();

async function main() {
  await prisma.staff.createMany({
    data: staffData,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
