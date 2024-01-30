import { userService } from "@/lib/services/user.service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await userService.findUsers();
  return NextResponse.json(response.response, { status: response.code });
}

export async function POST(request: Request) {
  const data = await request.json();

  const response = await userService.createUser(
    { name: data.name, dni: data.dni },
    { uuid: data.uuid, password: data.password }
  );

  return NextResponse.json(response.response, { status: response.code });
}
