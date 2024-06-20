import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  IsArray,
  ArrayNotEmpty,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "john_doe", description: "Имя пользователя" })
  @IsNotEmpty({ message: "Имя пользователя обязательно для заполнения" })
  @IsString({ message: "Имя пользователя должно быть строкой" })
  @Length(3, 20, {
    message: "Имя пользователя должно быть от 3 до 20 символов",
  })
  username: string;

  @ApiProperty({
    example: "john.doe@example.com",
    description: "Электронная почта",
  })
  @IsNotEmpty({ message: "Электронная почта обязательна для заполнения" })
  @IsEmail({}, { message: "Некорректный формат электронной почты" })
  email: string;

  @ApiProperty({ example: "+1234567890", description: "Номер телефона" })
  @IsNotEmpty({ message: "Номер телефона обязателен для заполнения" })
  @IsPhoneNumber("KZ", { message: "Некорректный номер телефона" })
  phone: string;

  @ApiProperty({ example: "password123", description: "Пароль" })
  @IsNotEmpty({ message: "Пароль обязателен для заполнения" })
  @IsString({ message: "Пароль должен быть строкой" })
  @Length(6, 20, { message: "Пароль должен быть от 6 до 20 символов" })
  password: string;

  @ApiProperty({ example: "John", description: "Имя", required: false })
  @IsOptional()
  @IsString({ message: "Имя должно быть строкой" })
  firstName?: string;

  @ApiProperty({ example: "Doe", description: "Фамилия", required: false })
  @IsOptional()
  @IsString({ message: "Фамилия должна быть строкой" })
  lastName?: string;

  @ApiProperty({
    example: ["admin", "user"],
    description: "Роли пользователя",
    isArray: true,
  })
  @IsArray({ message: "Роли должны быть массивом строк" })
  @ArrayNotEmpty({ message: "Роли не могут быть пустыми" })
  @IsString({ each: true, message: "Каждая роль должна быть строкой" })
  roles: string[];
}

export class UpdateUserDto {
  @ApiProperty({
    example: "john_doe",
    description: "Имя пользователя",
    required: false,
  })
  @IsOptional()
  @IsString({ message: "Имя пользователя должно быть строкой" })
  @Length(3, 20, {
    message: "Имя пользователя должно быть от 3 до 20 символов",
  })
  username?: string;

  @ApiProperty({
    example: "john.doe@example.com",
    description: "Электронная почта",
    required: false,
  })
  @IsOptional()
  @IsEmail({}, { message: "Некорректный формат электронной почты" })
  email?: string;

  @ApiProperty({
    example: "+1234567890",
    description: "Номер телефона",
    required: false,
  })
  @IsOptional()
  @IsPhoneNumber("KZ", { message: "Некорректный номер телефона" })
  phone?: string;

  @ApiProperty({
    example: "password123",
    description: "Пароль",
    required: false,
  })
  @IsOptional()
  @IsString({ message: "Пароль должен быть строкой" })
  @Length(6, 20, { message: "Пароль должен быть от 6 до 20 символов" })
  password?: string;

  @ApiProperty({ example: "John", description: "Имя", required: false })
  @IsOptional()
  @IsString({ message: "Имя должно быть строкой" })
  firstName?: string;

  @ApiProperty({ example: "Doe", description: "Фамилия", required: false })
  @IsOptional()
  @IsString({ message: "Фамилия должна быть строкой" })
  lastName?: string;

  @ApiProperty({
    example: ["admin", "user"],
    description: "Роли пользователя",
    required: false,
    isArray: true,
  })
  @IsOptional()
  @IsArray({ message: "Роли должны быть массивом строк" })
  @IsString({ each: true, message: "Каждая роль должна быть строкой" })
  roles?: string[];
}
