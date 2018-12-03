import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {AddTypeComponent} from './add-type/add-type.component';
import {DataTypeService} from './service/data-type.service';

const routes: Routes = [
  {
    path: 'configs/config-types/add-type',
    component: AddTypeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  exports: [
    AddTypeComponent
  ],
  providers: [
    DataTypeService
  ],
  declarations: [AddTypeComponent]
})
export class ConfigTypeModule { }
