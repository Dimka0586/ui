import { Component, OnInit } from '@angular/core';
import {CustomType} from '../../../shared/model/configuration/config-type/custom-type';
import {BaseType} from '../../../shared/model/configuration/config-type/base-type';
import {DataTypeService} from '../service/data-type.service';

@Component({
  selector: 'add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {

  dataTypes;
  customType: CustomType = new CustomType('', '', new Map<string, BaseType>());

  constructor(private dataTypeService: DataTypeService) { }

  ngOnInit() {
    this.dataTypes = this.dataTypeService.getDataTypes();
  }


  addField() {
    // this.type.fields.set(Math.random().toString(), JSON.parse(JSON.stringify(new NumberType())));
  }

  getKeys(map) {
    return Array.from(map.keys());
  }

  getDataTypes() {
    this.dataTypeService.getDataTypes().subscribe(data => console.log(data));
  }

}
