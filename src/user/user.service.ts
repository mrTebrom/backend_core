import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { User } from "./user.model";
import { Role } from "../role/role.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Role)
    private readonly roleModel: typeof Role,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const { roles, ...userData } = dto;
    const user = await this.userModel.create(userData);

    if (roles && roles.length > 0) {
      const roleInstances = await this.roleModel.findAll({
        where: { value: roles },
      });
      await user.$set("roles", roleInstances);
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

    if (roles) {
      const roleInstances = await this.roleModel.findAll({
        where: { value: roles },
      });
      await user.$set("roles", roleInstances);
    }

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.findAll({ include: [Role] });
  }

  async getUserById(id: number): Promise<User> {
    return this.userModel.findByPk(id, { include: [Role] });
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
  }
}
