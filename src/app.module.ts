import { Module } from '@nestjs/common';
import { MessageController } from './message/message.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MessageModule],
  controllers: [MessageController],
  providers: [AppService],
})
export class AppModule {}
