import { IJwt } from './jwt.interface';
import { IWB } from './wb.interface';

export interface IConfig {
  port: number;
  jwt: IJwt;
  wb: IWB;
}
