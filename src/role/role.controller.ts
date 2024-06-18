import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from "@nestjs/swagger";
import { RoleService } from "./role.service";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";

@ApiTags("role")
@Controller("role")
export class RoleController {
  constructor(private service: RoleService) {}

  @Get()
  @ApiOperation({ summary: "Получение всех ролей" })
  @ApiResponse({
    status: 200,
    description: "Возвращает все роли",
  })
  getAll() {
    return this.service.getAllRoles();
  }

  @Get("/id=:id")
  @ApiOperation({ summary: "Получение роли по ID" })
  @ApiResponse({ status: 200, description: "Возвращает роль по ID" })
  @ApiResponse({ status: 404, description: "Роль не найдена" })
  @ApiParam({ name: "id", type: Number, description: "ID роли" })
  getById(@Param("id") id: number) {
    return this.service.getRoleById(id);
  }

  @Post()
  @ApiOperation({ summary: "Создание новой роли" })
  @ApiResponse({
    status: 201,
    description: "Роль успешно создана",
  })
  @ApiResponse({ status: 400, description: "Неверные входные данные" })
  create(@Body() dto: CreateRoleDto) {
    return this.service.createRole(dto);
  }

  @Put("/id=:id")
  @ApiOperation({ summary: "Обновление роли по ID" })
  @ApiResponse({
    status: 200,
    description: "Роль успешно обновлена",
  })
  @ApiResponse({ status: 404, description: "Роль не найдена" })
  @ApiParam({ name: "id", type: Number, description: "ID роли" })
  update(@Body() dto: UpdateRoleDto, @Param("id") id: number) {
    console.log(dto);
    return this.service.updateRole(id, dto);
  }

  @Delete("/id=:id")
  @ApiOperation({ summary: "Удаление роли по ID" })
  @ApiResponse({
    status: 200,
    description: "Роль успешно удалена",
  })
  @ApiResponse({ status: 404, description: "Роль не найдена" })
  @ApiParam({ name: "id", type: Number, description: "ID роли" })
  destroy(@Param("id") id: number) {
    return this.service.deleteRole(id);
  }
}
