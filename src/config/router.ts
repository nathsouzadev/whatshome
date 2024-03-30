import { MessageModule } from '../message/message.module';
import { AuthModule } from '../auth/auth.module';

export const router = [
  {
    path: 'message',
    module: MessageModule,
  },
  {
    path: 'auth',
    module: AuthModule,
  },
];
