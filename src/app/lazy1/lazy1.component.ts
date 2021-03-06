import { IApiconfig } from './../api.config';
import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log.service';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component implements OnInit {
  cdata: string;
  configdata: IApiconfig
  constructor(private logService : LogServiceService) { }

  ngOnInit(): void {
    this.cdata = this.logService.getdata('lazy Child2')
    this.configdata = this.logService.getconfigvalue()
  }

}
