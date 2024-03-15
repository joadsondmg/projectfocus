import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routeAnalysisGuard } from './route-analysis.guard';

describe('routeAnalysisGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routeAnalysisGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
