import type { Room } from "../DTO/room.interface.ts";
import roomRepository from "../repositories/room.repository.ts";


const getByIdroom = async (id: string) => {
    const room = await roomRepository.findByIdRoom(Number(id));
    if (!room) {
        throw new Error("Room not found");
    }
    return room;
};
const getAllroom = async () => {
    const rooms = await roomRepository.findAllRoom();
    if (!rooms) {
        throw new Error("Rooms not found");
    }
    return rooms;
}
const setroom = async (label: string,
    capacity: number,
    site: string,
    building: string,
    floor: number) => {
    const newroom = await roomRepository.createRoom(label, capacity, site, building, floor);
    return newroom;
}

const deleteroom = async (id: number) => {
    const room = await roomRepository.findByIdRoom(id);
    // if (!room) {
    //     throw new Error("Room not found");
    // }
    return roomRepository.deleteRoom(id);
}
const updateroom = async (id: number, data: Room) => {
    const newroom = await roomRepository.updateRoom(id, data)

    return newroom;
}

export default {
    getByIdroom,
    getAllroom,
    setroom,
    deleteroom,
    updateroom,
    // Autres fonctions
};