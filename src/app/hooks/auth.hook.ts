import { adminService } from "@/lib/services/admin.service";
import { authService } from "@/lib/services/auth.service";

export async function authenticate(dni: string, password: string) {
  const response = await authService.login({ dni, password });

  // esto es para el login XD

  if (response.response.ok) {
    const user = {
      id: response.response.data.id,
      name: response.response.data.name,
      role: response.response.data.role,
    };

    return user;
  } else {
    return null;
  }
}

// la validacion del login es po dni pero la validacion por uuid
