import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}

    async login(email, password) {
        const user = await this.validateCredentials(email, password);

        const payload = {
            sub: user._id,
            username: user.name,
            role: "analista"
        };

        return this.jwtService.sign(payload);
    }

    validateCredentials(email, senha) {
        return this.userService.findByAuth(email, senha);
    }
}
