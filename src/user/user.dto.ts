import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from "class-validator";

export class CreateUserDto {
  // @IsNotEmpty({ message: "Имя пользователя обязательно для заполнения" })
  @IsString({ message: "Имя пользователя должно быть строкой" })
  @Length(3, 20, {
    message: "Имя пользователя должно быть от 3 до 20 символов",
  })
  username: string;

  // @IsNotEmpty({ message: "Электронная почта обязательна для заполнения" })
  @IsEmail({}, { message: "Некорректный формат электронной почты" })
  email: string;

  // @IsNotEmpty({ message: "Номер телефона обязателен для заполнения" })
  @IsPhoneNumber(null, { message: "Некорректный номер телефона" })
  phone: string;

  @IsNotEmpty({ message: "Пароль обязателен для заполнения" })
  @IsString({ message: "Пароль должен быть строкой" })
  @Length(6, 20, { message: "Пароль должен быть от 6 до 20 символов" })
  password: string;

  @IsOptional()
  @IsString({ message: "Имя должно быть строкой" })
  firstName?: string;

  @IsOptional()
  @IsString({ message: "Фамилия должна быть строкой" })
  lastName?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: "Имя пользователя должно быть строкой" })
  @Length(3, 20, {
    message: "Имя пользователя должно быть от 3 до 20 символов",
  })
  username?: string;

  @IsOptional()
  @IsEmail({}, { message: "Некорректный формат электронной почты" })
  email?: string;

  @IsOptional()
  @IsPhoneNumber(null, { message: "Некорректный номер телефона" })
  phone?: string;

  @IsOptional()
  @IsString({ message: "Пароль должен быть строкой" })
  @Length(6, 20, { message: "Пароль должен быть от 6 до 20 символов" })
  password?: string;

  @IsOptional()
  @IsString({ message: "Имя должно быть строкой" })
  firstName?: string;

  @IsOptional()
  @IsString({ message: "Фамилия должна быть строкой" })
  lastName?: string;
}
