import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eagarchild1Component } from './eagarchild1/eagarchild1.component';



@NgModule({
  declarations: [Eagarchild1Component],
  imports: [
    CommonModule
  ],
  exports : [Eagarchild1Component]
})
export class EagerModuleModule { }
