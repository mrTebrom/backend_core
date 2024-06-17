import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { RoleService } from "./role.service";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";

@Controller("role")
export class RoleController {
  constructor(private service: RoleService) {}

  @Get()
  getAll() {
    return this.service.getAllRoles();
  }

  @Get("/id=:id")
  getById(@Param("id") id: number) {
    return this.service.getRoleById(id);
  }

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.service.createRole(dto);
  }

  @Put("/id=:id")
  update(@Body() dto: UpdateRoleDto, @Param("id") id: number) {
    console.log(dto);
    return this.service.updateRole(id, dto);
  }

  @Delete("/id=:id")
  destroy(@Param("id") id: number) {
    return this.service.deleteRole(id);
  }
}
