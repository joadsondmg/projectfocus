import { CanActivateFn } from '@angular/router';
import { AccessControlService } from './access-control.service';
import { inject } from '@angular/core';

export const routeAnalysisGuard: CanActivateFn = () => {
  const routeService = inject(AccessControlService)
  const requestedRoute = 'analysis'
  return routeService.verifyAccess(requestedRoute);
};
