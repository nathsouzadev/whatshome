import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('AuthService', () => {
  let service: AuthService;
  let mockJwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue({
              access: {
                privateKey: 'some-secret',
              },
            }),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    mockJwtService = module.get<JwtService>(JwtService);
  });

  it('should return a token when user is authenticated', () => {
    const mockUser = {
      email: 'email@test.com',
      password: 'password',
    };
    jest.spyOn(mockJwtService, 'sign').mockImplementation(() => 'token');
    const token = service.getToken(mockUser);
    expect(mockJwtService.sign).toHaveBeenCalledWith(
      { ...mockUser },
      { secret: 'some-secret' },
    );
    expect(token).toMatchObject({ token: 'token' });
  });
});
