import {SimpleType} from './simple-type';

export class NumberType extends SimpleType<number> {
  constructor(public _id?: string, public type?: number) {
    super(_id, type);
  }
}
