import { TestBed } from '@angular/core/testing';

import { PwaPromptUpdateService } from './pwa-prompt-update-service.service';
import { ServiceWorkerModule } from '@angular/service-worker';

describe('PromptUpdateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ServiceWorkerModule.register('', {
        enabled: false,
      }),
    ],
    providers: [
      PwaPromptUpdateService
    ]
  }));

  // beforeEach(() => ServiceWorkerModule.register('', { enabled: false }));

  it('should be created', () => {
    const service: PwaPromptUpdateService = TestBed.get(PwaPromptUpdateService);
    expect(service).toBeTruthy();
  });
});
