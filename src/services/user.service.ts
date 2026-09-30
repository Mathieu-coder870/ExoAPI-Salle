import type { User } from "../DTO/user.interface.ts";
import userRepository from "../repositories/user.repository.ts";


const getByIduser = async (id: string) => {
    const user = await userRepository.findByIdUser(Number(id));
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
const getAlluser = async () => {
    const users = await userRepository.findAllUser();
    if (!users) {
        throw new Error("Users not found");
    }
    return users;
}
const setuser = async (firstname: string,
    lastname: string,
    email: string,
    roleId: string,
    roleLabel: string) => {
    const newuser = await userRepository.createUser(firstname, lastname, email, roleId, roleLabel);
    return newuser;
}

const deleteuser = async (id: number) => {
    const user = await userRepository.findByIdUser(id);
    // if (!user) {
    //     throw new Error("User not found");
    // }
    return userRepository.deleteUser(id);
}

const updateuser = async (id: number, data: User) => {
    const newuser = await userRepository.updateUser(id, data)

    return newuser;
}

export default {
    getByIduser,
    getAlluser,
    setuser,
    deleteuser,
    updateuser,
    //     // Autres fonctions
};