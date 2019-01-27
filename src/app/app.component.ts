import { environment } from './../environments/environment';
import { PwaCheckForUpdateService } from './services/pwa-check-for-update/pwa-check-for-update.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PwaPromptUpdateService } from './services/pwa-prompt-update/pwa-prompt-update-service.service';
import { NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterService } from './services/router/router.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private pwaCheckForUpdateService: PwaCheckForUpdateService,
    private pwaPromptUpdateService: PwaPromptUpdateService,
    private routerService: RouterService,
  ) {}
  ngOnInit() {
    if (environment.production) { // The service worker is not loaded into develop builds
      this.pwaCheckForUpdateService.init();
      this.pwaPromptUpdateService.init();
    }
    this.subscriptions.add(
      this.routerService.events.navigationStart.subscribe(() => this.sidenav.close()),
    );
   }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
