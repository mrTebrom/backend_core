import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UserRole } from "./relations/user-role";

@Module({
  imports: [SequelizeModule.forFeature([User, UserRole])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
