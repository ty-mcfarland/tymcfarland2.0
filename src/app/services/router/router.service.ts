import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterEvents } from './classes/router.events';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  events: RouterEvents;
  constructor(
    private router: Router,
  ) {
    this.events = new RouterEvents(this.router);
  }
}
