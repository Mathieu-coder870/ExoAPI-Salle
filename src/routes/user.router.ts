import Express from "express";
import userController from "../controllers/user.controller.ts";
// import roomRegistrationSchema from "../validators/room.validator.schema.ts"
// import { validateBody } from "../validators/room.validator.middleware.ts";

const userRouter = Express.Router();

userRouter.get("/users", userController.getAlluser);
userRouter.get("/users/:id", userController.getByIduser);
// userRouter.post("/users", validateBody(roomRegistrationSchema), userController.setuser);
userRouter.post("/users", userController.setuser);
userRouter.patch("/users/:id", userController.updateuser);
userRouter.delete("/users/:id", userController.deleteuser);


export default userRouter;