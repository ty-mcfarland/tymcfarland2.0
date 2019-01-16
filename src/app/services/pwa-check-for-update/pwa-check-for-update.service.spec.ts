import { TestBed } from '@angular/core/testing';

import { PwaCheckForUpdateService } from './pwa-check-for-update.service';
import { ServiceWorkerModule } from '@angular/service-worker';

describe('CheckForUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ServiceWorkerModule.register('', {
        enabled: false,
      }),
    ],
    providers: [
      PwaCheckForUpdateService,
    ]
  }));

  // beforeEach(() => ServiceWorkerModule.register('', { enabled: false }));

  it('should be created', () => {
    const service: PwaCheckForUpdateService = TestBed.get(PwaCheckForUpdateService);
    expect(service).toBeTruthy();
  });
});
