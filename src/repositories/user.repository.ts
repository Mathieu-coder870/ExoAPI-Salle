import { prisma } from "../../lib/prisma.ts";
import type { User } from "../DTO/user.interface.ts";

const findAllUser = async () => {
    return await prisma.user.findMany();
};

const findByIdUser = async (id: number) => {
    return await prisma.user.findUnique(
        {
            where: { id: id },
        }
    );
};
const createUser = async (firstname: string,
    lastname: string,
    email: string,
    roleId: string,
    roleLabel: string) => {
    return await prisma.user.create({
        data: { firstname, lastname, email, roleId, roleLabel },
    });
};
const updateUser = async (id: number, data: User) => {
    return await prisma.user.update(
        {
            where: { id: id },
            data: { ...data },
        }
    )
};

const deleteUser = async (id: number) => {
    return await prisma.user.delete(
        {
            where: { id: id },
        }
    )
}

export default {
    findAllUser,
    findByIdUser,
    createUser,
    deleteUser,
    updateUser,

}