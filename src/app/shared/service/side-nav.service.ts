import { Injectable } from '@angular/core';
import {MatSidenav} from '@angular/material';
import {NavigationEnd, Router, Event} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  sideNavMenu: MatSidenav;
  currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  openSideNavMenu() {
    this.sideNavMenu.open();
  }

  closeSideNavMenu() {
    this.sideNavMenu.close();
  }

  toggleSideNavMenu() {
    this.sideNavMenu.toggle();
  }

  setSideNavMenu(sideNavMenu: MatSidenav) {
    this.sideNavMenu = sideNavMenu;
  }
}
