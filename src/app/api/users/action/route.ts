import { userService } from "@/lib/services/user.service";
import { NextRequest, NextResponse } from "next/server";

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
  let response;
  if (action === "delete") {
    response = await userService.deleteUser(
      data.payload.user_deleted_id,
      data.infoAdmin
    );
  } else if (action === "edit") {
    response = await userService.editUser(data.payload, data.infoAdmin);
  }

  console.log(response);

  return NextResponse.json(response?.response, { status: response?.code });
}

// entendemos que del form llegara esta inforrmacion
