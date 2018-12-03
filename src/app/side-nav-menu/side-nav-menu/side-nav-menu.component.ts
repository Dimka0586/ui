import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../shared/model/side-nav/nav-item';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnInit {

  navItems: NavItem[] = [
    {
      displayName: 'Mnemos',
      iconName: 'recent_actors',
      route: '',
      children: [
        {
          displayName: 'Home',
          iconName: 'home',
          route: '',
          children: []
        },
        {
          displayName: 'GreenHouse',
          iconName: 'speaker_notes',
          route: '',
          children: []
        }
      ]
    },
    {
      displayName: 'Configurations',
      iconName: 'videocam',
      children: [
        {
          displayName: 'Config type',
          iconName: 'group',
          route: 'configs/config-types/add-type',
          children: []
        },
        {
          displayName: 'Config instance',
          iconName: 'speaker_notes',
          route: 'configs/config-instances/add-instance',
          children: []
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
