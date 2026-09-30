import Express from "express";
import roomRouter from "./src/routes/room.router.ts";

import cors from "cors";
import roleRouter from "./src/routes/role.router.ts";
import reservationRouter from "./src/routes/reservation.router.ts";
import userRouter from "./src/routes/user.router.ts";

const express = Express;
const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:3001"
}));

app.use(express.json());

app.use("/api", roomRouter);
app.use("/api", roleRouter);
app.use("/api", reservationRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

