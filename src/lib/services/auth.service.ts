import { connectionToDatabase } from "../database/mongoose.connection";
import userSchema from "../models/user.schema";
import { httpService } from "./http.service";
import { userService } from "./user.service";

import bcrypt from "bcrypt";

connectionToDatabase();

class AuthService {
  async login(data: { dni: string; password: string }) {
    try {
      // buscamos al usuario
      const res_user = await userService.findUsersByDni(data.dni);
      if (!res_user.response.ok) return res_user;

      // comparamos contraseñas
      const res_compare = await bcrypt.compare(
        data.password,
        res_user.response.data.password
      );
      // Si es erroneo mandamos error
      if (!res_compare) return httpService.http401();
      const user = res_user.response.data;
      // mandamos un mensaje de success en base a un nuevo formato
      return httpService.http200("Login ok!", {
        id: user.id,
        name: user.name,
        role: user.role,
      });
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }
}

export const authService = new AuthService();
