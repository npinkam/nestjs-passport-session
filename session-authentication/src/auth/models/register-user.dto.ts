// src/auth/models/register-user.dto.ts

export class RegisterUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmationPassword: string;
    role = 'user';
  }