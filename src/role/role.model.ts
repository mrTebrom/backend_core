// src/roles/role.entity.ts
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateRoleDto } from "./role.dto";

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
}
