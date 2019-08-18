import {Component, HostListener, OnInit} from '@angular/core';
import {DeviceDetectorService} from '../core/device-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jeicon';

  constructor(private readonly deviceDetector: DeviceDetectorService,
  ) {

  }

  ngOnInit(): void {
  }


  @HostListener('window:resize', [])
  onResize() {
    this.deviceDetector.widthChange.emit(document.documentElement.clientWidth);
  }
}
