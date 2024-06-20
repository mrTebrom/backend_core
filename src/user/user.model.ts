import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Role } from "../role/role.model";
import { UserRole } from "./relations/user-role";

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 20],
      notEmpty: true,
    },
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    validate: {
      is: {
        args: /^\+\d{1,15}$/,
        msg: "Некорректный номер телефона",
      },
    },
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [6, 20],
      notEmpty: true,
    },
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastName?: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
