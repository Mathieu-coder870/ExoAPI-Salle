import type { Request, Response } from "express";
import roomservice from "../services/room.service.ts";
import type { Room } from "../DTO/room.interface.ts";

const getByIdroom = async (req: Request, res: Response) => {
    try {
        console.log(req.params);
        const room = await roomservice.getByIdroom(req.params.id as string);
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getAllroom = async (req: Request, res: Response) => {
    try {
        const rooms = await roomservice.getAllroom();
        return res.status(200).json(rooms);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const setroom = async (req: Request, res: Response) => {
    try {
        const { label, capacity, site, building, floor } = req.body;
        const newroom = await roomservice.setroom(label, capacity, site, building, floor);
        return res.status(201).json(newroom);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};

const deleteroom = async (req: Request, res: Response) => {
    try {
        const room = await roomservice.deleteroom(Number(req.params.id));
        return res.status(204).json(room);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateroom = async (req: Request, res: Response) => {
    try {
        // const { id, label, capacity, site, building, floor } = req.body;
        /*const id = Number(req.params.id);
        const data = req.body as Room;

        const roomUpdated = await roomservice.updateroom(id, data);*/

        const id = Number(req.params.id);
        const data = req.body as Room;

        const roomUpdated = await roomservice.updateroom(id, data);
        return res.status(205).json(roomUpdated);
    } catch (error) {
        return res.status(500).json(error);
    }

}

export default {
    getAllroom,
    getByIdroom,
    setroom,
    deleteroom,
    updateroom,
};