import { Component, OnInit } from '@angular/core';
import {CustomType} from '../../../shared/model/configuration/config-type/custom-type';
import {BaseType} from '../../../shared/model/configuration/config-type/base-type';
import {DataTypeService} from '../service/data-type.service';
import {NumberType} from '../../../shared/model/configuration/config-type/number-type';
import {MatTreeFlatDataSource, MatTreeNestedDataSource} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, of} from 'rxjs';

export class CustomTypeFieldNode {
  children: CustomTypeFieldNode[];
  fieldName: string;
  type: string;
}

@Component({
  selector: 'add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {

  dataTypes;
  customType: CustomType = new CustomType('', '', new Map<string, BaseType>());

  exFields = new Map().set('InMin', NumberType).set('InMax', NumberType).set('OutMin', NumberType).set('OutMax', NumberType).set('In', NumberType);

  exCustomType: CustomType = new CustomType('id-123', 'scale', this.exFields);

  dataSource: MatTreeNestedDataSource<CustomTypeFieldNode>;
  treeControl: NestedTreeControl<CustomTypeFieldNode>;
  dataChange: BehaviorSubject<CustomTypeFieldNode[]> = new BehaviorSubject<CustomTypeFieldNode[]>([])

  constructor(private dataTypeService: DataTypeService) {
    this.dataSource = new MatTreeNestedDataSource<CustomTypeFieldNode>();
    this.treeControl = new NestedTreeControl<CustomTypeFieldNode>(this._getChildren);

    this.dataChange.subscribe(data => this.dataSource.data = data);

    this.dataChange.next([
      {
        fieldName: 'in',
        type: 'number',
        children: []
      },
      {
        fieldName: 'out',
        type: 'number',
        children: []
      },
      {
        fieldName: 'sensor1_scale',
        type: 'scale',
        children: [
          {
            fieldName: 'inMin',
            type: 'number',
            children: []
          },
          {
            fieldName: 'inMax',
            type: 'number',
            children: []
          },
        ]
      }
    ]);
  }

  private _getChildren = (node: CustomTypeFieldNode) => {
    return of(node.children);
  }

  ngOnInit() {
    this.dataTypeService.getDataTypes().subscribe(types => this.dataTypes = types);
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

  hasNestedChild = (_: number, nodeData: CustomTypeFieldNode) => {
    return nodeData.children.length > 0;
  }

}
