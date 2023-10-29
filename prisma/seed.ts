import { PrismaClient } from "@prisma/client";
import type { Sender, Kitchen, MenuItem } from "@prisma/client";
import { faker } from "@faker-js/faker";

type FakeSender = "name" | "username" | "password";
type FakeMenuItem = Pick<MenuItem, "name" | "price" | "category">;

const prisma = new PrismaClient();
const categories = Array(5)
  .fill(0)
  .map(() => faker.commerce.productAdjective().toLocaleLowerCase());

function createRandomSender(): Pick<Sender, FakeSender> {
  const name = faker.person.firstName();
  return {
    name,
    username: faker.internet.displayName({ firstName: name }),
  };
}

function createRandomMenuItems(): FakeMenuItem {
  return {
    name: faker.commerce.product(),
    price: faker.number.float({ max: 200, precision: 0.01 }),
    category: categories[Math.floor(Math.random() * 5)],
  };
}

try {
  const fakeKitchen = await prisma.kitchen.create({
    data: {
      name: faker.commerce.department().toLocaleLowerCase(),
      capacity: faker.number.int(10),
    },
  });

  await prisma.menuItem.createMany({
    data: Array(50)
      .fill(0)
      .map(() => ({
        ...createRandomMenuItems(),
        kitchenId: fakeKitchen.id,
      })),
  });

  await prisma.sender.createMany({
    data: Array(5)
      .fill(0)
      .map(() => ({
        ...createRandomSender(),
        kitchenId: fakeKitchen.id,
      })),
  });

  console.log("Database has been seeded. 🌱");
} catch (error) {
  console.error(error);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
