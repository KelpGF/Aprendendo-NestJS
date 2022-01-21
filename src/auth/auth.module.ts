import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "dqni47238jedwqo392",
      signOptions: {
        expiresIn: '60s'
      }
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService]
})
export class AuthModule {}
