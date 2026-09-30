import { prisma } from "../../lib/prisma.ts";
import type { Role } from "../DTO/role.interface.ts";

const findAllRole = async () => {
    return await prisma.role.findMany();
};

const findByIdRole = async (id: number) => {
    return await prisma.role.findUnique(
        {
            where: { id: id },
        }
    );
};
const createRole = async (label: string) => {
    return await prisma.role.create({
        data: { label },
    });
};

const updateRole = async (id: number, data: Role) => {
    return await prisma.role.update(
        {
            where: { id: id },
            data: { ...data },
        }
    )
};

const deleteRole = async (id: number) => {
    return await prisma.role.delete(
        {
            where: { id: id },
        }
    )
}

export default {
    findAllRole,
    findByIdRole,
    createRole,
    deleteRole,
    updateRole,

}