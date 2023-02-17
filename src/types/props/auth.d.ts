export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  email: string;
  name: string;
  password: string;
  phone: string;
};

export type AuthResponse = {
  message: string;
  data: {
    access_token: string;
    user: {
      id: number;
      name: string;
      email: string;
      phone: string;
      verified: boolean;
      is_consultant: boolean;
      created_at: string;
      published_at: string;
    };
  };
};
