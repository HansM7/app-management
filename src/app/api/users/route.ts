import { userService } from "@/lib/services/user.service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await userService.findUsers();
  return NextResponse.json(response.response, { status: response.code });
}

export async function POST(request: Request) {
  const data = await request.json();

  const response = await userService.createUser(data.body, data.validation);

  return NextResponse.json(response.response, { status: response.code });
}

// {
//   "body": {
//       "name": "Hans admin",
//       "role": "admin",
//       "dni": "78956863"
//   },
//   "validation":{

//   }
// }
