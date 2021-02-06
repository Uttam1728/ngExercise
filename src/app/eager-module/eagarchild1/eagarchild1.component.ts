import { Component, OnInit } from '@angular/core';
import { LogServiceService } from 'src/app/log.service';

@Component({
  selector: 'app-eagarchild1',
  templateUrl: './eagarchild1.component.html',
  styleUrls: ['./eagarchild1.component.css']
})
export class Eagarchild1Component implements OnInit {
  cdata: string;
  configdata: import("c:/Users/uradadiya/MyHHA/AngularTraining/01.02.2021/FirstAngApp/src/app/api.config").IApiconfig;

  constructor(private logService : LogServiceService) { }

  ngOnInit(): void {
    this.cdata = this.logService.getdata('Eager Child1')
    this.configdata = this.logService.getconfigvalue()
  }

}
