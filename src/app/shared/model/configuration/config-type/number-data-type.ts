import {DataType} from './data-type';

export class NumberDataType extends DataType<number> {
  constructor(public field?: string, public value?: number) {
    super('number-id', 'number', field, null, value);
  }
}
