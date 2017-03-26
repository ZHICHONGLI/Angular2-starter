import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //get URL 
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    //authorize if logged in 
    if (localStorage.getItem('userId') !== null) { return true; }
    //or store url to localStorage
    localStorage.setItem('redirectUrl', url);
    //navigate to login page
    this.router.navigate(['/login']);
    //false no redirect
    return false;
  }
}