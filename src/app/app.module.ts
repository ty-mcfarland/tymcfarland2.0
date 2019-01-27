import { PwaPromptUpdateService } from './services/pwa-prompt-update/pwa-prompt-update-service.service';
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
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterService } from './services/router/router.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ReferencesComponent,
    ContactComponent
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
    RouterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
