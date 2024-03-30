import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthRequestDTO } from './dto/auth-request.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    description: 'Return token when user have valid credentials',
    schema: { example: { token: 'some-token' } },
  })
  @ApiUnauthorizedResponse({
    description: 'Return error when does not have token',
  })
  @ApiBody({ type: AuthRequestDTO })
  @HttpCode(HttpStatus.OK)
  @Post()
  async auth(@Body() body: AuthRequestDTO) {
    return this.authService.getToken(body);
  }
}
