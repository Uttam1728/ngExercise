import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazy1Component } from './lazy1.component';
import { apiconfigvalue } from '../api.config.value';
import { IApiconfig } from '../api.config';

const configValue : IApiconfig = {
  AppName : 'Lazy Module 1',
  EndPoint : 'www.lazy1.com'
}

@NgModule({
  declarations: [Lazy1Component],
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ],
  providers : [{provide:apiconfigvalue,useValue:configValue}]
})
export class Lazy1Module { }
