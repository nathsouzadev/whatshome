import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('MessageController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/auth', () => {
    it('return a token when user have valid credentials', async () => {
      return request(app.getHttpServer())
        .post('/auth')
        .send({
          email: 'admin@email.com',
          password: 'admin',
        })
        .expect(200)
        .then(async (response) => {
          expect(response.body).toMatchObject({
            token: expect.any(String),
          });
        });
    });
  });
});
