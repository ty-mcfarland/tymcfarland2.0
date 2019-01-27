import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';
import { Router } from '@angular/router';
import { MockRouter } from '../../mocks/router.mock';

xdescribe('RouterService', () => { // TODO: come back and resolve RouterEvents
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Router, useClass: MockRouter },
    ]
  }));

  it('should be created', () => {
    const service: RouterService = TestBed.get(RouterService);
    expect(service).toBeTruthy();
  });
});
