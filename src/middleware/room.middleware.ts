import roomservice from "../services/room.service.ts";


const checkExists = async (req, res, next) => {
    const room = await roomservice.getById(req.params.id);
    if (!room) {
        return res.status(404).json({
            message: "Room not found",
        });
    }
    req.room = room;
    next();
};
export default { checkExists };