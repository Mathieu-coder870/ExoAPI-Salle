import { prisma } from "../../lib/prisma.ts";
import type { Reservation } from "../DTO/reservation.interface.ts";

const findAllReservation = async () => {
    return await prisma.reservation.findMany();
};

const findByIdReservation = async (id: number) => {
    return await prisma.reservation.findUnique(
        {
            where: { id: id },
        }
    );
};
const createReservation = async (salle_id: string,
    date_debut: string,
    date_fin: string,
    user_id: string) => {
    return await prisma.reservation.create({
        data: { salle_id, date_debut, date_fin, user_id },
    });
};
const updateReservation = async (id: number, data: Reservation) => {
    return await prisma.reservation.update(
        {
            where: { id: id },
            data: { ...data },
        }
    )
};

const deleteReservation = async (id: number) => {
    return await prisma.reservation.delete(
        {
            where: { id: id },
        }
    )
}

export default {
    findAllReservation,
    findByIdReservation,
    createReservation,
    deleteReservation,
    updateReservation,

}