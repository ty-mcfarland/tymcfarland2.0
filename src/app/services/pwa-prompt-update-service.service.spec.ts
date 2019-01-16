import { TestBed } from '@angular/core/testing';

import { PwaPromptUpdateService } from './pwa-prompt-update-service.service';

describe('PromptUpdateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PwaPromptUpdateService = TestBed.get(PwaPromptUpdateService);
    expect(service).toBeTruthy();
  });
});
