import type { Reservation } from "../DTO/reservation.interface.ts";
import reservationRepository from "../repositories/reservation.repository.ts";


const getByIdreservation = async (id: string) => {
    const reservation = await reservationRepository.findByIdReservation(Number(id));
    if (!reservation) {
        throw new Error("Reservation not found");
    }
    return reservation;
};
const getAllreservation = async () => {
    const reservations = await reservationRepository.findAllReservation();
    if (!reservations) {
        throw new Error("Reservations not found");
    }
    return reservations;
}
const setreservation = async (salle_id: string,
    date_debut: string,
    date_fin: string,
    user_id: string) => {
    const newreservation = await reservationRepository.createReservation(salle_id, date_debut, date_fin, user_id);
    return newreservation;
}

const deletereservation = async (id: number) => {
    const reservation = await reservationRepository.findByIdReservation(id);
    // if (!reservation) {
    //     throw new Error("Reservation not found");
    // }
    return reservationRepository.deleteReservation(id);
}

const updatereservation = async (id: number, data: Reservation) => {
    const newreservation = await reservationRepository.updateReservation(id, data)

    return newreservation;
}

export default {
    getByIdreservation,
    getAllreservation,
    setreservation,
    deletereservation,
    updatereservation,
    //     // Autres fonctions
};