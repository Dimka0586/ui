import { Component, OnInit } from '@angular/core';
import {CustomType} from '../../../shared/model/configuration/config-type/custom-type';
import {BaseType} from '../../../shared/model/configuration/config-type/base-type';
import {DataTypeService} from '../service/data-type.service';
import {NumberType} from '../../../shared/model/configuration/config-type/number-type';
import {MatTreeFlatDataSource, MatTreeNestedDataSource} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, of} from 'rxjs';
import {SimpleType} from '../../../shared/model/configuration/config-type/simple-type';

/*export class CustomTypeFieldNode {

  constructor(public fieldName: string, public customType: CustomType) {}
}*/



@Component({
  selector: 'add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {

  customType: CustomType = new CustomType('', 'jkjk', new Map<string, CustomType>().set('in', new CustomType('', 'number')));

  dataSource: MatTreeNestedDataSource<Map<string, CustomType>>;
  treeControl: NestedTreeControl<Map<string, CustomType>>;
  dataChange: BehaviorSubject<Map<string, CustomType>[]> = new BehaviorSubject<Map<string, CustomType>[]>([])

  customTypes: CustomType[] = [];
  simpleTypes: SimpleType<BaseType>[];


  constructor(private dataTypeService: DataTypeService) {
    console.log('customType: ', this.customType);
    this.dataSource = new MatTreeNestedDataSource<Map<string, CustomType>>();
    this.treeControl = new NestedTreeControl<Map<string, CustomType>>(this._getChildren);

    this.dataChange.subscribe(data => this.dataSource.data = data);

    this.dataChange.next([new Map<string, CustomType>().set(undefined, this.customType)]);

    /*this.dataChange.next([
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
    ]);*/
  }

  /*private _getChildren = (node: CustomTypeFieldNode) => {
    return of(node.children);
  }*/

  private _getChildren = (node: Map<string, CustomType>) => {
    console.log('getChildren: ', node);
    const map = new Map<string, CustomType>();
    if (node.size > 1) {
      this.getKeys(node).forEach((key: string) => {
        if (!!key) {
          map.set(key, node.get(key));
        }
      });
    }

    return of(map);
  }

  ngOnInit() {
    this.dataTypeService.getDataTypes().subscribe((types: SimpleType<BaseType>[]) => this.simpleTypes = types);
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

  /*hasNestedChild = (_: number, nodeData: CustomTypeFieldNode) => {
    return nodeData.children.length > 0;
  }*/

  hasNestedChild = (_: number, nodeData: Map<string, CustomType>) => {
    console.log('hasNestedChild: ', nodeData);
    return nodeData.size > 1;
  }

  addType(): CustomType {
    const newCustomType = JSON.parse(JSON.stringify(this.customType));
    this.customTypes.push(newCustomType);
    // this.dataChange.next(this.customTypes);
    return newCustomType;
  }

}
