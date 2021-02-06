import { IApiconfig } from './../api.config';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2Component } from './lazy2.component';
import { apiconfigvalue } from '../api.config.value';

const configValue : IApiconfig = {
  AppName : 'Lazy Module 2',
  EndPoint : 'www.lazy2.com'
}

@NgModule({
  declarations: [Lazy2Component],
  imports: [
    CommonModule,
    Lazy2RoutingModule
  ],
  providers : [{provide:apiconfigvalue,useValue:configValue}]
})
export class Lazy2Module { }
