import { ApiProperty } from '@nestjs/swagger';

export class AuthRequestDTO {
  @ApiProperty({
    example: 'company@email.com',
  })
  email: string;

  @ApiProperty({
    example: 'password',
  })
  password: string;
}
