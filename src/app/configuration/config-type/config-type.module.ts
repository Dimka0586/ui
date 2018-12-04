import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTreeModule
} from '@angular/material';
import {AddTypeComponent} from './add-type/add-type.component';
import {DataTypeService} from './service/data-type.service';
import { AddTypeFieldNodeComponent } from './add-type/add-type-field-node/add-type-field-node.component';
import { ViewTypeFieldNodeComponent } from './add-type/view-type-field-node/view-type-field-node.component';

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
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    AddTypeComponent
  ],
  providers: [
    DataTypeService
  ],
  declarations: [AddTypeComponent, AddTypeFieldNodeComponent, ViewTypeFieldNodeComponent]
})
export class ConfigTypeModule { }
