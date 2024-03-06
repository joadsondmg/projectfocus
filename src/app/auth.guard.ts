import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const route = inject(Router)
  const auth = inject(AuthService)
  const currentState = auth.isAuthenticated()

  if(!currentState) {
    route.navigate(['login'])
  }
  return currentState
};
