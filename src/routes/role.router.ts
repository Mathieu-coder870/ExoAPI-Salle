import Express from "express";
import roleController from "../controllers/role.controller.ts";
// import roomRegistrationSchema from "../validators/room.validator.schema.ts"
// import { validateBody } from "../validators/room.validator.middleware.ts";

const roleRouter = Express.Router();

roleRouter.get("/roles", roleController.getAllrole);
roleRouter.get("/roles/:id", roleController.getByIdrole);
// roleRouter.post("/roles", validateBody(roomRegistrationSchema), roomController.setroom);
roleRouter.post("/roles", roleController.setrole);
roleRouter.patch("/roles/:id", roleController.updaterole);
roleRouter.delete("/roles/:id", roleController.deleterole);


export default roleRouter;