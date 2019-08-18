import {EventEmitter, Injectable} from '@angular/core';
import { DeviceType } from './device-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {
  deviceType: DeviceType = DeviceType.DESKTOP;
  widthChange = new EventEmitter<number>();

  constructor() {
    this.widthChange.subscribe((width: number) => {
      if (width < 769) {
        this.deviceType = DeviceType.MOBILE;
      } else if (width < 992) {
        this.deviceType = DeviceType.TABLET;
      } else {
        this.deviceType = DeviceType.DESKTOP;
      }
    });
  }

  get isMobile() {
    return this.deviceType === DeviceType.MOBILE;
  }

  get isTablet() {
    return this.deviceType === DeviceType.TABLET;
  }

  get isDesktop() {
    return this.deviceType === DeviceType.DESKTOP;
  }
}
