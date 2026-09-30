import Express from "express";
import reservationController from "../controllers/reservation.controller.ts";
// import reservationRegistrationSchema from "../validators/room.validator.schema.ts"
// import { validateBody } from "../validators/room.validator.middleware.ts";

const reservationRouter = Express.Router();

reservationRouter.get("/reservations", reservationController.getAllreservation);
reservationRouter.get("/reservations/:id", reservationController.getByIdreservation);
// roomRouter.post("/rooms", validateBody(roomRegistrationSchema), roomController.setroom);  a faire avecvalidator
reservationRouter.post("/reservations", reservationController.setreservation);
reservationRouter.patch("/reservations/:id", reservationController.updatereservation);
reservationRouter.delete("/reservations/:id", reservationController.deletereservation);


export default reservationRouter;