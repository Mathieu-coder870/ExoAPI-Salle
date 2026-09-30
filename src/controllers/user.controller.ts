import type { Request, Response } from "express";
import userservice from "../services/user.service.ts";
import type { User } from "../DTO/user.interface.ts";

const getByIduser = async (req: Request, res: Response) => {
    try {
        console.log(req.params);
        const user = await userservice.getByIduser(req.params.id as string);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getAlluser = async (req: Request, res: Response) => {
    try {
        const users = await userservice.getAlluser();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const setuser = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, email, roleId, roleLabel } = req.body;
        const newuser = await userservice.setuser(firstname, lastname, email, roleId, roleLabel);
        return res.status(201).json(newuser);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};

const deleteuser = async (req: Request, res: Response) => {
    try {
        const user = await userservice.deleteuser(Number(req.params.id));
        return res.status(204).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateuser = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id);
        const data = req.body as User;

        const userUpdated = await userservice.updateuser(id, data);
        return res.status(205).json(userUpdated);
    } catch (error) {
        return res.status(500).json(error);
    }

}

export default {
    getAlluser,
    getByIduser,
    setuser,
    deleteuser,
    updateuser,
};