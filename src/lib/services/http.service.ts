type returning = {
  code: number;
  response: { ok: boolean; message: string; data: any };
};
class HttpSerivice {
  http200(message: string = "Fetching ok!", data?: any): returning {
    return {
      code: 200,
      response: {
        ok: true,
        message,
        data,
      },
    };
  }

  http201(message: string = "Register successfully!", data?: any): returning {
    return {
      code: 201,
      response: {
        ok: true,
        message,
        data,
      },
    };
  }

  http400(message: string = "Error ", data?: any): returning {
    return {
      code: 400,
      response: {
        ok: false,
        message,
        data,
      },
    };
  }

  http404(message: string = "Error file not found!", data?: any): returning {
    return {
      code: 404,
      response: {
        ok: false,
        message,
        data,
      },
    };
  }

  http401(message: string = "Error, no authorization!", data?: any): returning {
    return {
      code: 401,
      response: {
        ok: false,
        message,
        data,
      },
    };
  }

  http500(message: string = "Error server", error?: any): returning {
    return {
      code: 500,
      response: {
        ok: false,
        message,
        data: error,
      },
    };
  }
}

export const httpService = new HttpSerivice();
