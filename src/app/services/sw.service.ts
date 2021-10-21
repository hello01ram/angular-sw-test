import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class ServiceWorkerService {
  constructor(private sw: SwUpdate) {
    this.sw.available.subscribe(this.updateSW.bind(this));
  };

  private updateSW(evt: any): void {
    console.log('New service worker available');
    setTimeout(async () => {
      await this.sw.activateUpdate();
      location.reload();
    }, 2000);
  }
}