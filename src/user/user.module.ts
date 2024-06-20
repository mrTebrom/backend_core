import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UserRole } from "./relations/user-role";
import { Role } from "../role/role.model";
import { RoleModule } from "src/role/role.module";

@Module({
  imports: [SequelizeModule.forFeature([User, UserRole, Role]), RoleModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
