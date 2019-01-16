import { environment } from './../environments/environment';
import { PwaCheckForUpdateService } from './services/pwa-check-for-update/pwa-check-for-update.service';
import { Component, OnInit } from '@angular/core';
import { PwaPromptUpdateService } from './services/pwa-prompt-update-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tymcfarland2';

  constructor(
    private pwaCheckForUpdateService: PwaCheckForUpdateService,
    private pwaPromptUpdateService: PwaPromptUpdateService,
  ) {
    console.log('AppComponent');

  }
  ngOnInit() {
    if (environment.production) { // The service worker is not loaded into develop builds
      console.log('adding service worker');
      this.pwaCheckForUpdateService.init();
      this.pwaPromptUpdateService.init();
    }
   }
}
