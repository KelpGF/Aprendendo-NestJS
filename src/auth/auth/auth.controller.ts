import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body) {
        return {
            token: await this.authService.login(body.email, body.password)
        };
    }

    @Role('admin')
    @UseGuards(JwtGuard, RoleGuard)
    @Get('user-data')
    getUser(@Req() req) {
        return req.user;
    }

}
