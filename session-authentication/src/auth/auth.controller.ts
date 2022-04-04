import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { LocalGuard } from 'src/local.guard';
import { AuthService } from './auth.service';
import { LoginUserDto } from './models/login-user.dto';
import { RegisterUserDto } from './models/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    registerUser(@Body() user:RegisterUserDto){
        return this.authService.registerUser(user)
    }

    @UseGuards(LocalGuard)
    @Post('login')
    loginUser(@Req() req, @Body() user: LoginUserDto){
        return req.session
    }

    @Get('logout')
    logoutUser(@Req() req){
        req.logout()
    }
}
