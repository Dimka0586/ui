import {Component, OnInit, ViewChild} from '@angular/core';
import {SideNavService} from './shared/service/side-nav.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sideNavMenu') sideNavMenu: MatSidenav;

  constructor(private sideNavService: SideNavService) {}

  ngOnInit(): void {
    this.sideNavService.setSideNavMenu(this.sideNavMenu);
  }
}
