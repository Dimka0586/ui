import { Component, OnInit } from '@angular/core';
import {CustomType} from '../../../shared/model/configuration/config-type/custom-type';
import {BaseType} from '../../../shared/model/configuration/config-type/base-type';
import {DataTypeService} from '../service/data-type.service';
import {NumberType} from '../../../shared/model/configuration/config-type/number-type';
import {MatTreeFlatDataSource, MatTreeNestedDataSource} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, of} from 'rxjs';
import {SimpleType} from '../../../shared/model/configuration/config-type/simple-type';
import {NumberDataType} from '../../../shared/model/configuration/config-type/number-data-type';
import {DataType} from '../../../shared/model/configuration/config-type/data-type';
import {DataTypeField} from '../../../shared/model/configuration/config-type/data-type-field';

/*export class CustomTypeFieldNode {

  constructor(public fieldName: string, public customType: CustomType) {}
}*/

export class FieldNode

@Component({
  selector: 'add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {
  newDataTypeName: string;
  // customType: CustomType = new CustomType('', 's', new Map<string, CustomType>().set('in', new CustomType('', 'number')));



  numberDataType = new NumberDataType();

  scale = new DataType('id-1', 'scale', null, new Map<string, DataType<any>>()
    .set('inMin', new NumberDataType('inMin')).set('inMax', new NumberDataType('inMax')));

  sensor = new DataType('', 'sensor', null, new Map<string, DataType<any>>()
    .set('in', new NumberDataType('in')).set('out', new NumberDataType('out')).set('scale', this.scale));


  dataSource: MatTreeNestedDataSource<DataType<any>>;
  treeControl: NestedTreeControl<DataType<any>>;
  dataChange: BehaviorSubject<DataType<any>[]> = new BehaviorSubject<DataType<any>[]>([])

  // customTypes: CustomType[] = [];
  // simpleTypes: SimpleType<BaseType>[];

  dataTypes = [this.scale, this.sensor];

  constructor(private dataTypeService: DataTypeService) {
    this.dataSource = new MatTreeNestedDataSource<DataType<any>>();
    this.treeControl = new NestedTreeControl<DataType<any>>(this._getChildren);

    this.dataChange.subscribe(data => this.dataSource.data = data);

    this.dataChange.next(this.dataTypes);
  }

  private _getChildren = (node: DataType<any>) => {
    console.log('getChildren: ', node);
    // const map = new Map<string, DataType<any>>();
    const nodes = [];
    if (node.fields && node.fields.size > 0) {
      this.getKeys(node.fields).forEach((key: string) => {
        if (!!key) {
          nodes.push(node.fields.get(key));
        }
      });
    }
    return of(nodes);
  }

  ngOnInit() {
    // this.dataTypeService.getDataTypes().subscribe((types: SimpleType<BaseType>[]) => this.simpleTypes = types);
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

  hasNestedChild = (_: number, node: DataType<any>) => {
    return node.fields && node.fields.size > 0;
  }

  addType(): DataType<any> {
    const newDataType = new DataType('', this.newDataTypeName, null, new Map().set('default', new NumberDataType('default')))
    this.dataTypes.push(newDataType);
    this.dataChange.next(this.dataTypes);
    return newDataType;
  }

}
