import { connectionToDatabase } from "../database/mongoose.connection";
import userSchema from "../models/user.schema";
import { adminService } from "./admin.service";
import { httpService } from "./http.service";
import bcrypt from "bcrypt";

type infoAdmin = {
  uuid: string;
  password: string;
};

type body = {
  name: string;
  dni: string;
};

connectionToDatabase();

class UserService {
  async findUsers() {
    try {
      const users = await userSchema.find();
      return httpService.http200("All users", users);
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }

  async createUser(user: body, infoAdmin: infoAdmin) {
    try {
      // const res_validate = await adminService.validateAdmin(infoAdmin);
      // if (!res_validate.response.ok) return res_validate;

      const newFormat = {
        ...user,
        password: await bcrypt.hash(user.dni, 11),
      };
      await userSchema.create(newFormat);
      return httpService.http201("User created!");
    } catch (error) {
      console.log(error);
      return httpService.http500(undefined, error);
    }
  }

  async editUser(data: any, infoAdmin: infoAdmin) {
    try {
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }

  async deleteUser(uuid: string, infoAdmin: infoAdmin) {
    try {
      // Validamos al administrador
      const res_validate = await adminService.validateAdmin(infoAdmin);
      if (!res_validate.response.ok) return res_validate;
      // Buscamos al usuario a eliminar
      const res_delete = await this.findUsersByUUID(uuid);
      if (!res_delete.response.ok) return res_delete;
      // Lo eliminamos
      await userSchema.deleteOne({ id: uuid });
      httpService.http200("User deleted");
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }

  async findUsersByDni(dni: string) {
    try {
      const user = await userSchema.find({ dni: dni });
      if (user) return httpService.http200("User found", user);
      return httpService.http404("User not found");
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }

  async findUsersByUUID(uuid: string) {
    try {
      const user = await userSchema.find({ id: uuid });
      if (user) return httpService.http200("User found", user);
      return httpService.http404("User not found");
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }
}

export const userService = new UserService();
