import { prisma } from "../../lib/prisma.ts";
import type { Room } from "../DTO/room.interface.ts";

const findAllRoom = async () => {
    return await prisma.room.findMany();
};

const findByIdRoom = async (id: number) => {
    return await prisma.room.findUnique(
        {
            where: { id: id },
        }
    );
};
const createRoom = async (label: string,
    capacity: number,
    site: string,
    building: string,
    floor: number) => {
    return await prisma.room.create({
        data: { label, capacity, site, building, floor },
    });
};
const updateRoom = async (id: number, data: Room) => {
    return await prisma.room.update(
        {
            where: { id: id },
            data: { ...data },
        }
    )
};

const deleteRoom = async (id: number) => {
    return await prisma.room.delete(
        {
            where: { id: id },
        }
    )
}

export default {
    findAllRoom,
    findByIdRoom,
    createRoom,
    deleteRoom,
    updateRoom,

}