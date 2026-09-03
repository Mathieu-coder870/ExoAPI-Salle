import { prisma } from "./lib/prisma.ts";
async function main() {
    const room = await prisma.room.create({
        data: {
            label: "Alice",
            capacity: 2,
            site: "Dehors",
            building: "ft",
            floor: 2,
        },

    });
    console.log("Created room:", room);
    // Fetch all rooms with their posts
    const allRoom = await prisma.room.findMany();
    console.log("All rooms:", JSON.stringify(allRoom, null, 2));
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });