import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavService} from './service/side-nav.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SideNavService
  ]
})
export class SharedModule { }
