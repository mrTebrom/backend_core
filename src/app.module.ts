import { RoleModule } from "./role/role.module";
import { AuthModule } from "./auth/auth.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./role/role.model";
import { UserModule } from "./user/user.module";
import { User } from "./user/user.model";
import { UserRole } from "./user/relations/user-role";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.dev.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadModels: true,
      synchronize: true,
      models: [Role, User, UserRole],
      logging: false,
    }),
    AuthModule,
    RoleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
