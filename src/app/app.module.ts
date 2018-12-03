import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {AppHeaderModule} from './app-header/app-header.module';
import {SideNavMenuModule} from './side-nav-menu/side-nav-menu.module';
import {ConfigTypeModule} from './configuration/config-type/config-type.module';
import {MatInputModule, MatSidenavModule} from '@angular/material';
import {ConfigInstanceModule} from './configuration/config-instance/config-instance.module';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,

    SharedModule,
    AppHeaderModule,
    SideNavMenuModule,
    ConfigTypeModule,
    ConfigInstanceModule,

    MatSidenavModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
