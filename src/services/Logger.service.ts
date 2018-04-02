import { Injectable } from "@angular/core";


/**
 * 提供一个Log输出服务
 */
@Injectable()
export class Logger{
      log(msg:any){console.log(msg)}
      error(msg:any){ console.error(msg)}
      warn(msg:any){console.warn(msg)}
}