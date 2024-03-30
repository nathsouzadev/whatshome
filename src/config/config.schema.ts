import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  PORT: Joi.number().required(),
  WB_URL: Joi.string().required(),
  WEBHOOK_VERIFY_TOKEN: Joi.string().required(),
  GRAPH_API_TOKEN: Joi.string().required(),
  JWT_PRIVATE_KEY: Joi.string().required(),
  //   JWT_ACCESS_TIME: Joi.number().required(),
  //   JWT_CONFIRMATION_SECRET: Joi.string().required(),
  //   JWT_CONFIRMATION_TIME: Joi.number().required(),
  //   JWT_RESET_PASSWORD_SECRET: Joi.string().required(),
  //   JWT_RESET_PASSWORD_TIME: Joi.number().required(),
  //   JWT_REFRESH_SECRET: Joi.string().required(),
  //   JWT_REFRESH_TIME: Joi.number().required(),
  //   REFRESH_COOKIE: Joi.string().required(),
  //   COOKIE_SECRET: Joi.string().required(),
});
