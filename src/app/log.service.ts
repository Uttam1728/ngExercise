import { apiconfigvalue } from './api.config.value';
import { IApiconfig } from './api.config';
import { Inject, Injectable } from '@angular/core';

@Injectable(
{
  providedIn : 'any'
}
)
export class LogServiceService {

  private static Counter : number = 0
  constructor(@Inject(apiconfigvalue)private config : IApiconfig) {
      LogServiceService.Counter = LogServiceService.Counter + 1
      console.log('LogService Instence number' + LogServiceService.Counter)
  }

  getdata(name){
    return "calling log service from " + name
  }

  getconfigvalue(){
    return this.config
  }

}
