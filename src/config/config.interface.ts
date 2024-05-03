import { IGenAI } from './genAi.interface';
import { IJwt } from './jwt.interface';
import { IWB } from './wb.interface';

export interface IConfig {
  port: number;
  jwt: IJwt;
  wb: IWB;
  genAi: IGenAI;
}
