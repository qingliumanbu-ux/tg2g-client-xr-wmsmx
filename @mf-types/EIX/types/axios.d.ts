/*
 * @Description:
 * @Author: Edward
 * @Date: 2024-04-16 09:57:12
 * @LastEditors: Edward
 * @LastEditTime: 2024-04-30 10:57:25
 */
import { AxiosPromise, AxiosRequestConfig } from 'axios';
export declare function setBaseURLHandler(baseUrl: string): void;
export default function sendRequest(config: AxiosRequestConfig): AxiosPromise<any>;
export declare function setExpiredHandler(callback: (args: any) => void): void;
export declare function setRefreshTokenCallback(callback: () => Promise<any>): void;
