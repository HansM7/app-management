import { userService } from "@/lib/services/user.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  const response = await userService.findUsersByUUID(id);
  return NextResponse.json(response.response, { status: response.code });
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  const response = await userService.findUsersByUUID(id);
  return NextResponse.json(response.response, { status: response.code });
}
