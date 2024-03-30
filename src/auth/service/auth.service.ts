import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRequestDTO } from '../dto/auth-request.dto';
import { TokenModel } from '../model/token.model';
import { ConfigService } from '@nestjs/config';
import { IJwt } from '../../config/jwt.interface';

@Injectable()
export class AuthService {
  private readonly jwtConfig: IJwt;

  constructor(
    private readonly configService: ConfigService,
    private jwtService: JwtService,
  ) {
    this.jwtConfig = this.configService.get<IJwt>('jwt');
  }

  getToken = (data: AuthRequestDTO): TokenModel => {
    const token = this.jwtService.sign(
      { ...data },
      { secret: this.jwtConfig.access.privateKey },
    );

    return { token };
  };
}
