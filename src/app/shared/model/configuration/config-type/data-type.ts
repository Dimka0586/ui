import {BaseType} from './base-type';

export class DataType<T> extends BaseType {
  constructor(public _id: string, public name: string, public field?: string, public fields?: Map<string, DataType<any>>, public value?: T) {
    super(name);
  }
}
