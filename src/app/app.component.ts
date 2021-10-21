import { Component } from '@angular/core';
import { ServiceWorkerService } from './services/sw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sw-test';
  public constructor(private serviceWorker: ServiceWorkerService) {
    
  }
}
