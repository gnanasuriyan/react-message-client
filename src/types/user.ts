export interface User {
    id: number;
    username: string;
  }
  
  export interface LoginDto {
    username: string;
    password: string;
  }

  export interface SignupDto {
    username: string;
    password: string;
    confirm_password: string;
  }
  