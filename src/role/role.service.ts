import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./role.model";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private model: typeof Role) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    //Создание роли

    // Проверка роли на уникальность
    const candidate = await this.model.findOne({ where: { value: dto.value } });
    if (candidate) {
      // Если роль существует то ошибка
      throw new HttpException(
        "Данная роль уже существует",
        HttpStatus.BAD_REQUEST,
      );
    }

    // Создание роли
    const role = await this.model.create(dto);
    return role;
  }

  async getAllRoles(): Promise<Role[]> {
    // Получение всех ролей
    return this.model.findAll();
  }

  async getRoleById(id: number): Promise<Role> {
    // Поиск роли по ID

    const role = await this.model.findByPk(id);
    //Проверка на ее существование
    if (!role) {
      // Если ее нету то ошибка
      throw new HttpException("Роль не была найдена", HttpStatus.BAD_REQUEST);
    }
    return role;
  }

  async updateRole(id: number, dto: UpdateRoleDto): Promise<Role> {
    // Редактирование роли
    const role = await this.getRoleById(id);

    // Проверка уникальности роли
    const candidate = await this.model.findOne({ where: { value: dto.value } });
    if (candidate.value === role.value && candidate.id !== role.id) {
      throw new HttpException(
        "Название для роли уже занято",
        HttpStatus.BAD_REQUEST,
      );
    }
    // Изменение роли
    await role.update(dto);
    return role;
  }

  async deleteRole(id: number): Promise<void> {
    // Удаление роли

    const role = await this.getRoleById(id);
    await role.destroy();
  }
}
