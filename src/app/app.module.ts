import { LogServiceService } from 'src/app/log.service';
import { EagerModuleModule } from './eager-module/eager-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { apiconfigvalue } from './api.config.value';
import { IApiconfig } from './api.config';
//import { ProductsearchPipe } from './productsearch.pipe';

const configValue :IApiconfig = {
  AppName : 'Global Log',
  EndPoint : "www.globallog.com"
}

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    //ProductsearchPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EagerModuleModule
  ],

  providers: [LogServiceService,
              {provide:apiconfigvalue,useValue:configValue}
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
