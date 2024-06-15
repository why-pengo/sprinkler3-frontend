import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authenticationGuard = () => {
  const isLoggedInValue = true;
  if (isLoggedInValue) {
    return true;
  } else {
    const router: Router = inject(Router);
    router.navigate(['/']);
    return false;
  }
};
