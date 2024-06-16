// src/roles/role.entity.ts
import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface CreateRole {
  value: string; // Название роли
  description: string; // Описание роли
}

@Table
export class Role extends Model<Role, CreateRole> {
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
