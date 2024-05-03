import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@nestjs/core';
import { router } from './config/router';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config/config.schema';
import { GenAiModule } from './gen-ai/gen-ai.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
      load: [config],
    }),
    MessageModule,
    AuthModule,
    RouterModule.register(router),
    GenAiModule,
  ],
})
export class AppModule {}
