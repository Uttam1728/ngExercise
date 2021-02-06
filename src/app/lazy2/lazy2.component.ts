import { IApiconfig } from './../api.config';
import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log.service';

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css']
})

export class Lazy2Component implements OnInit {
  cdata: string;
  configdata : IApiconfig;

  constructor(private logService : LogServiceService) { }

  ngOnInit(): void {
    this.cdata = this.logService.getdata('Lazy Child1')
    this.configdata = this.logService.getconfigvalue()
  }

}
