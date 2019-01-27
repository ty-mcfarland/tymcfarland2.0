import { RouterEventsInterface } from '../types/router.events.type';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class RouterEvents implements RouterEventsInterface {
    navigationStart: Observable<NavigationStart>;
    navigationEnd: Observable<NavigationEnd>;
    constructor(
        private router: Router,
    ) {
        this.navigationStart = this.router.events.pipe(filter(event => (event instanceof NavigationStart))) as Observable<NavigationStart>;
        this.navigationEnd = this.router.events.pipe(filter(event => (event instanceof NavigationEnd))) as Observable<NavigationEnd>;
    }
}
