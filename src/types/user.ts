/**
 * User interface — represents the authenticated user's profile.
 */
export interface User {
  id: string;
  email: string;
}

export interface LoginResponse {
  message: string;
  status: string;
  data: {
    id: string;
    email: string;
    password: string;
    token: string;
  };
}
