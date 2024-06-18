import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { User } from "../user.model";
import { Role } from "../../role/role.model";

@Table
export class UserRole extends Model<UserRole> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
}
