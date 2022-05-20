export type LoginFormType = {
  login: string;
  token: string | null;
  userId: string;
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

export type RegisterRequestType = {
  name: string;
  login: string;
  password: string;
};

export type RegisterResponseType = {
  id: string;
  name: string;
  login: string;
};

export type RegisterFormValuesType = {
  nameValue: string;
  loginValue: string;
  passwordValue: string;
};

export type UserType = {
  id: string;
  name: string;
  login: string | undefined;
  password: string;
};

export type DecodedToken = {
  iat: number;
  login: string;
  userId: string;
};
