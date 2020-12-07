import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
  ) { }
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (user) {
          this.zone.run(() => {
            this.router.navigate(['home']);
          })
          //this.router.navigate(['home'])
        }

          resolve(!user ? true : false);
      });
    });
  }
}
