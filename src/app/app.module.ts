import { PwaPromptUpdateService } from './services/pwa-prompt-update-service.service';
import { PwaCheckForUpdateService } from './services/pwa-check-for-update/pwa-check-for-update.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'tymcfarland2'
    }),
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [
    PwaCheckForUpdateService,
    PwaPromptUpdateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
