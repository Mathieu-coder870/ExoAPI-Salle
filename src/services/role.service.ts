import type { Role } from "../DTO/role.interface.ts";
import roleRepository from "../repositories/role.repository.ts";


const getByIdrole = async (id: string) => {
    const role = await roleRepository.findByIdRole(Number(id));
    if (!role) {
        throw new Error("role not found");
    }
    return role;
};
const getAllrole = async () => {
    const roles = await roleRepository.findAllRole();
    if (!roles) {
        throw new Error("roles not found");
    }
    return roles;
}
const setrole = async (label: string) => {
    const newrole = await roleRepository.createRole(label);
    return newrole;
}

const deleterole = async (id: number) => {
    const role = await roleRepository.findByIdRole(id);
    // if (!role) {
    //     throw new Error("Role not found");
    // }
    return roleRepository.deleteRole(id);
}

const updaterole = async (id: number, data: Role) => {
    const newrole = await roleRepository.updateRole(id, data)

    return newrole;
}

export default {
    getByIdrole,
    getAllrole,
    setrole,
    deleterole,
    updaterole,
    //     //     // Autres fonctions
};