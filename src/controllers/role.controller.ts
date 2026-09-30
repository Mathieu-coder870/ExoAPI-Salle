import type { Request, Response } from "express";
import roleservice from "../services/role.service.ts";
import type { Role } from "../DTO/role.interface.ts";

const getByIdrole = async (req: Request, res: Response) => {
    try {
        console.log(req.params);
        const role = await roleservice.getByIdrole(req.params.id as string);
        return res.status(200).json(role);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getAllrole = async (req: Request, res: Response) => {
    try {
        const roles = await roleservice.getAllrole();
        return res.status(200).json(roles);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const setrole = async (req: Request, res: Response) => {
    try {
        const { label } = req.body;
        const newrole = await roleservice.setrole(label);
        return res.status(201).json(newrole);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};

const deleterole = async (req: Request, res: Response) => {
    try {
        const role = await roleservice.deleterole(Number(req.params.id));
        return res.status(204).json(role);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updaterole = async (req: Request, res: Response) => {
    try {
        //         //         // const { id, label, capacity, site, building, floor } = req.body;
        //         // /*const id = Number(req.params.id);
        //         // const data = req.body as Reservation;

        //         //         const roomUpdated = await roomservice.updateroom(id, data);*/

        const id = Number(req.params.id);
        const data = req.body as Role;

        const roleUpdated = await roleservice.updaterole(id, data);
        return res.status(205).json(roleUpdated);
    } catch (error) {
        return res.status(500).json(error);
    }

}

export default {
    getAllrole,
    getByIdrole,
    setrole,
    deleterole,
    updaterole,
};