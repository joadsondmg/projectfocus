import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routeAdminGuard } from './route-admin.guard';

describe('routeAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routeAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
