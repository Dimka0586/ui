import {Component, Input, OnInit} from '@angular/core';
import {CustomType} from '../../../../shared/model/configuration/config-type/custom-type';

@Component({
  selector: 'add-type-field-node',
  templateUrl: './add-type-field-node.component.html',
  styleUrls: ['./add-type-field-node.component.scss']
})
export class AddTypeFieldNodeComponent implements OnInit {

  @Input() customType: CustomType;
  @Input() fieldName: string;
  @Input() dataTypes: any;

  constructor() { }

  ngOnInit() {
  }

}
