import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from '../../core/device-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  constructor(public deviceDetectorService: DeviceDetectorService) { }

  ngOnInit() {
  }

}
