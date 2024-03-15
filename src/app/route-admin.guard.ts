import { CanActivateFn } from '@angular/router';
import { AccessControlService } from './access-control.service';
import { inject } from '@angular/core';

export const routeAdminGuard: CanActivateFn = () => {
  const routeService = inject(AccessControlService)
  const requestedRoute = 'admin'
  return routeService.verifyAccess(requestedRoute);
};
