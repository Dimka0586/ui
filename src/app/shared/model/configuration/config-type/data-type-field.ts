import {DataType} from './data-type';

export class DataTypeField<T> {
  constructor(public fieldName: string, type: DataType<T>) {}
}
