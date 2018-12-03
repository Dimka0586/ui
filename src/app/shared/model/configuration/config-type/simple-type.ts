import {BaseType} from './base-type';

export class SimpleType<T> extends BaseType {
  constructor(public name: string, public value?: T) {
    super(name);
  }
}
