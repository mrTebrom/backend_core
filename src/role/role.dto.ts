// src/roles/dto/create-role.dto.ts
import { IsString, IsNotEmpty } from "class-validator";

export class CreateRoleDto {
  @IsString({ message: "Имя роли должно быть строкой" })
  @IsNotEmpty({ message: "Имя роли не может быть пустым" })
  name: string; // Название роли

  @IsString({ message: "Описание роли должно быть строкой" })
  description: string; // Описание роли
}

export class UpdateRoleDto {
  @IsString({ message: "Имя роли должно быть строкой" })
  name: string; // Название роли

  @IsString({ message: "Описание роли должно быть строкой" })
  description: string; // Описание роли
}
