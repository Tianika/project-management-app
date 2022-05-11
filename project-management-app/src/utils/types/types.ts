export type LoginFormType = {
  login: string;
  token: string | null;
};

export type LoginFormValuesType = {
  loginValue: string;
  passwordValue: string;
};

export type LoginResponseType = {
  token: string;
};

export type LoginRequestType = {
  login: string;
  password: string;
};

export type AuthErrorType = {
  status: number;
  data: {
    statusCode: number;
    message: string;
  };
};
