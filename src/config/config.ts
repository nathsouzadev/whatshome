import { IConfig } from './config.interface';

export default (): IConfig => ({
  port: parseInt(process.env.PORT, 10 || 3000),
  wb: {
    url: process.env.WB_URL,
    verifyToken: process.env.WEBHOOK_VERIFY_TOKEN,
    graphApiToken: process.env.GRAPH_API_TOKEN,
  },
  jwt: {
    access: {
      privateKey: process.env.JWT_PRIVATE_KEY,
      publicKey: process.env.publicKey,
      time: parseInt(process.env.JWT_ACCESS_TIME, 10),
    },
    confirmation: {
      secret: process.env.JWT_CONFIRMATION_SECRET,
      time: parseInt(process.env.JWT_CONFIRMATION_TIME, 10),
    },
    resetPassword: {
      secret: process.env.JWT_RESET_PASSWORD_SECRET,
      time: parseInt(process.env.JWT_RESET_PASSWORD_TIME, 10),
    },
    refresh: {
      secret: process.env.JWT_REFRESH_SECRET,
      time: parseInt(process.env.JWT_REFRESH_TIME, 10),
    },
  },
  genAi: {
    apiKey: process.env.GEN_AI_API_KEY,
  }
});
