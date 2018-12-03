import {BaseType} from './base-type';

export class CustomType extends BaseType {
  constructor(public _id: string, public name: string, public fields = new Map<string, BaseType>()) {
    super(name);
  }
}
