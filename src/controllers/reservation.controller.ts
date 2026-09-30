import type { Request, Response } from "express";
import reservationservice from "../services/reservation.service.ts";
import type { Reservation } from "../DTO/reservation.interface.ts";

const getByIdreservation = async (req: Request, res: Response) => {
    try {
        console.log(req.params);
        const reservation = await reservationservice.getByIdreservation(req.params.id as string);
        return res.status(200).json(reservation);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getAllreservation = async (req: Request, res: Response) => {
    try {
        const reservations = await reservationservice.getAllreservation();
        return res.status(200).json(reservations);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const setreservation = async (req: Request, res: Response) => {
    try {
        const { salle_id, date_debut, date_fin, user_id } = req.body;
        const newreservation = await reservationservice.setreservation(salle_id, date_debut, date_fin, user_id);
        return res.status(201).json(newreservation);
    }
    catch (error) {
        return res.status(500).json(error);
    }
};

const deletereservation = async (req: Request, res: Response) => {
    try {
        const reservation = await reservationservice.deletereservation(Number(req.params.id));
        return res.status(204).json(reservation);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updatereservation = async (req: Request, res: Response) => {
    try {
        //         // const { id, label, capacity, site, building, floor } = req.body;
        // /*const id = Number(req.params.id);
        // const data = req.body as Reservation;

        //         const roomUpdated = await roomservice.updateroom(id, data);*/

        const id = Number(req.params.id);
        const data = req.body as Reservation;

        const reservationUpdated = await reservationservice.updatereservation(id, data);
        return res.status(205).json(reservationUpdated);
    } catch (error) {
        return res.status(500).json(error);
    }

}

export default {
    getAllreservation,
    getByIdreservation,
    setreservation,
    deletereservation,
    updatereservation,
};