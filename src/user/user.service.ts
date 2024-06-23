import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { User } from "./user.model";
import { Role } from "../role/role.model";
import { RoleService } from "src/role/role.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private role: RoleService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const { roles, ...userData } = dto;
    const user = await this.userModel.create(userData);

    if (roles && roles.length > 0) {
      // Проверка, есть ли роли в DTO
      const roleInstances = await this.role.findByRoles(roles); // Поиск ролей через сервис RoleService

      await user.$set("roles", roleInstances); // Установка ролей для пользователя
    }

    return user;
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
    const { roles, ...userData } = dto;
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    await user.update(userData);

    if (roles && roles.length > 0) {
      // Проверка, есть ли роли в DTO
      const roleInstances = await this.role.findByRoles(roles); // Поиск ролей через сервис RoleService

      await user.$set("roles", roleInstances); // Установка ролей для пользователя
    }

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.findAll({ include: [Role] });
  }

  async getUserById(id: number): Promise<User> {
    return this.userModel.findByPk(id, { include: [Role] });
  }

  // Поиск по логину
  async findByUsername(username: string) {
    // Получаем логин и ищем его
    return this.userModel.findOne({ where: { username: username } });
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
  }
}
