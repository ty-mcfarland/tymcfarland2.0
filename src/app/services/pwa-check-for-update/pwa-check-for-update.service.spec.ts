import { TestBed } from '@angular/core/testing';

import { PwaCheckForUpdateService } from './pwa-check-for-update.service';

describe('CheckForUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PwaCheckForUpdateService
    ]
  }));

  it('should be created', () => {
    const service: PwaCheckForUpdateService = TestBed.get(PwaCheckForUpdateService);
    expect(service).toBeTruthy();
  });
});
