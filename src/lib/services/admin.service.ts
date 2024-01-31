import userSchema from "../models/user.schema";
import { httpService } from "./http.service";

import bcrypt from "bcrypt";

type adminInfo = {
  uuid: string;
  password: string;
};

class AdminService {
  async createAdmin(data: any) {
    try {
      await userSchema.create({ ...data, role: "admin" });
      return httpService.http200("Admin created", data);
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }

  async findAdminByUUID(uuid: string) {
    try {
      const admin = await userSchema.findOne({ id: uuid });
      if (!admin) return httpService.http404("Admin not found");
      return httpService.http200("Admin found", admin);
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }

  async deleteAdmin(uuid: string, data: adminInfo) {
    try {
      // Si no existe al admin, mandamos un error
      const res_admin = await this.findAdminByUUID(uuid);
      if (!res_admin.response.ok) return res_admin;
      // Si no esta validado quien elimina al admin mandamos un error
      const res_validate = await this.validateAdmin(data);
      if (!res_validate?.response.ok) return res_validate;
      // Eliminamos
      await userSchema.deleteOne({ id: uuid });
      return httpService.http200("Admin delete");
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }

  async validateAdmin(data: adminInfo) {
    try {
      // buscamos al administrador
      const res_admin = await this.findAdminByUUID(data.uuid);
      if (!res_admin.response.ok) return res_admin;
      // Validamos si es admin
      console.log(res_admin.response.data);
      console.log(res_admin.response.data.role !== "admin");
      if (res_admin.response.data.role !== "admin")
        return httpService.http401("No authorization in role");

      // Comparamos contraseñas
      const res_compare = await bcrypt.compare(
        data.password,
        res_admin.response.data.password
      );

      // mandamos error si no coinciden
      if (!res_compare)
        return httpService.http401("No authorization in password");
      // mandamos ok si es que pasa
      return httpService.http200("Admin authorization");
    } catch (error) {
      return httpService.http500(undefined, error);
    }
  }
}

export const adminService = new AdminService();
