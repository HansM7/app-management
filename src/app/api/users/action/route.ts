import { userService } from "@/lib/services/user.service";
import { NextRequest } from "next/server";

type body = {
  action: string;
  infoAdmin: {
    uuid: string;
    password: string;
  };
  payload: any;
};

export async function POST(request: NextRequest) {
  const data: body = await request.json();
  const action = data.action;
  if (action === "delete") {
    await userService.deleteUser(data.payload.user_deleted_id, data.infoAdmin);
  } else if (action === "edit") {
    await userService.editUser(data.payload, data.infoAdmin);
  }
}

// entendemos que del form llegara esta inforrmacion
