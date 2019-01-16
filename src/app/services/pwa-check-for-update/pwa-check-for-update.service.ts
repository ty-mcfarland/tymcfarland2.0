import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval, concat } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PwaCheckForUpdateService {

  constructor(
    private appRef: ApplicationRef,
    private updates: SwUpdate,
  ) {
  }
  init() {
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const everyTenMinutes$ = interval(1000 * 10);
    const everyTenMinutesOnceAppIsStable$ = concat(appIsStable$, everyTenMinutes$);

    everyTenMinutesOnceAppIsStable$.subscribe(() => {
      return this.updates.checkForUpdate()
        .then(() => {
          return console.log('check for update again');
        });
    });
  }
}
