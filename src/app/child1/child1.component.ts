import { LogServiceService } from './../log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  cdata = ''
  configdata: import("c:/Users/uradadiya/MyHHA/AngularTraining/01.02.2021/FirstAngApp/src/app/api.config").IApiconfig;
  constructor(private logService : LogServiceService) { }

  ngOnInit(): void {
    this.cdata = this.logService.getdata('Child1')
    this.configdata = this.logService.getconfigvalue()
  }

}
