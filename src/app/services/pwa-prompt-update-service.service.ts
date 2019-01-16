import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaPromptUpdateService {

  constructor(
    private updates: SwUpdate
  ) {
  }
  init() {
    this.updates.available.subscribe(event => {
      if (event) {
        this.updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }
}
