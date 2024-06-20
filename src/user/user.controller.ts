import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { User } from "./user.model";
@Controller("user")
export class UserController {
  constructor(private readonly service: UserService) {}
  @ApiOperation({ summary: "Получение всех пользователей" })
  @ApiResponse({
    status: 200,
    description: "Возвращает всех пользователей",
    type: [User],
  })
  @Get()
  getAll() {
    return this.service.getAllUsers();
  }

  @Get("/id=:id")
  @ApiOperation({ summary: "Получение пользователя по ID" })
  @ApiResponse({
    status: 200,
    description: "Возвращает пользователя по ID",
    type: User,
  })
  @ApiResponse({ status: 404, description: "Пользователь не найден" })
  @ApiParam({ name: "id", type: Number, description: "ID пользователя" })
  getById(@Param("id") id: number) {
    return this.service.getUserById(id);
  }

  @Post()
  @ApiOperation({ summary: "Создание нового пользователя" })
  @ApiResponse({
    status: 201,
    description: "Пользователь успешно создан",
    type: User,
  })
  @ApiResponse({ status: 400, description: "Неверные входные данные" })
  create(@Body() dto: CreateUserDto) {
    return this.service.createUser(dto);
  }

  @Put("/id=:id")
  @ApiOperation({ summary: "Обновление пользователя по ID" })
  @ApiResponse({
    status: 200,
    description: "Пользователь успешно обновлен",
    type: User,
  })
  @ApiResponse({ status: 404, description: "Пользователь не найден" })
  @ApiParam({ name: "id", type: Number, description: "ID пользователя" })
  update(@Body() dto: UpdateUserDto, @Param("id") id: number) {
    return this.service.updateUser(id, dto);
  }

  @Delete("/id=:id")
  @ApiOperation({ summary: "Удаление пользователя по ID" })
  @ApiResponse({
    status: 200,
    description: "Пользователь успешно удален",
  })
  @ApiResponse({ status: 404, description: "Пользователь не найден" })
  @ApiParam({ name: "id", type: Number, description: "ID пользователя" })
  destroy(@Param("id") id: number) {
    return this.service.deleteUser(id);
  }
}
