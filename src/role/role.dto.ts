import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateRoleDto {
  @IsString({ message: "Имя роли должно быть строкой" })
  @IsNotEmpty({ message: "Имя роли не может быть пустым" })
  @ApiProperty({ example: "Гость", description: "Название роли" })
  value: string; // Название роли

  @IsString({ message: "Описание роли должно быть строкой" })
  @ApiProperty({
    example: "Описание роли",
    description: "Описание роли/должности за что отвечает и т.д.",
    required: false,
  })
  description: string; // Описание роли
}

export class UpdateRoleDto {
  @IsString({ message: "Имя роли должно быть строкой" })
  @ApiProperty({
    example: "Гость",
    description: "Название роли",
    required: false,
  })
  value: string; // Название роли

  @IsString({ message: "Описание роли должно быть строкой" })
  @ApiProperty({
    example: "Описание роли",
    description: "Описание роли/должности за что отвечает и т.д.",
    required: false,
  })
  description: string; // Описание роли
}
