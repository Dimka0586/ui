import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule, MatListModule} from '@angular/material';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { MenuListItemComponent } from './side-nav-menu/menu-list-item/menu-list-item.component';

const routes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatListModule,
    MatIconModule
  ],
  exports: [
    SideNavMenuComponent,
    MenuListItemComponent
  ],
  declarations: [SideNavMenuComponent, MenuListItemComponent]
})
export class SideNavMenuModule { }
