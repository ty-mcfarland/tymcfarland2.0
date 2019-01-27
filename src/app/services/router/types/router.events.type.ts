import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface RouterEventsInterface {
    navigationStart?: Observable<NavigationStart>;
    navigationEnd?: Observable<NavigationEnd>;
}
