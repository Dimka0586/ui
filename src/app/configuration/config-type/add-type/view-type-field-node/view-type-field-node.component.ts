import {Component, Input, OnInit} from '@angular/core';
import {CustomType} from '../../../../shared/model/configuration/config-type/custom-type';

@Component({
  selector: 'view-type-field-node',
  templateUrl: './view-type-field-node.component.html',
  styleUrls: ['./view-type-field-node.component.scss']
})
export class ViewTypeFieldNodeComponent implements OnInit {

  @Input() fieldName: string;
  @Input() fieldType: string;

  @Input() customType: CustomType;

  constructor() { }

  ngOnInit() {
  }

  getKeys(map: Map<any, any>) {
    return Array.from(map.keys());
  }

}
