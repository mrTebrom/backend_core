// src/roles/role.entity.ts
import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import { CreateRoleDto } from "./role.dto";
import { User } from "../user/user.model";
import { UserRole } from "../user/relations/user-role";

@Table({
  tableName: "role",
})
export class Role extends Model<Role, CreateRoleDto> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  value: string; // Название роли

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string; // Описание роли

  @BelongsToMany(() => User, () => UserRole)
  users: User[]; // Свзяь с пользовательями
}
