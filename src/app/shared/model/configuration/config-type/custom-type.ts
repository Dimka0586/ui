import {BaseType} from './base-type';
import {SimpleType} from './simple-type';

export class CustomType extends BaseType {
  constructor(public _id: string, public name: string, public fields = new Map<string, CustomType>(), public simple?: SimpleType<BaseType>) {
    super(name);
  }
}
