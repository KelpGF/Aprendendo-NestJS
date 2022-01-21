import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoginController } from './auth/login/login.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:123@mongokelvin.5kpqp.mongodb.net/test'
    ),
    UsersModule,
    AuthModule
  ],
  controllers: [LoginController],
  providers: [],
})
export class AppModule {}
