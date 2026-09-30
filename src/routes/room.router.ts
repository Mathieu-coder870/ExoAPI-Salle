import Express from "express";
import roomController from "../controllers/room.controller.ts";
import { validateBody } from "../validators/room.validator.middleware.ts";
import { roomRegistrationSchema } from "../validators/room.validator.schema.ts";

const roomRouter = Express.Router();

roomRouter.get("/rooms", roomController.getAllroom);
roomRouter.get("/rooms/:id", roomController.getByIdroom);
roomRouter.post("/rooms", validateBody(roomRegistrationSchema), roomController.setroom);
roomRouter.patch("/rooms/:id", roomController.updateroom);
roomRouter.delete("/rooms/:id", roomController.deleteroom);


export default roomRouter;