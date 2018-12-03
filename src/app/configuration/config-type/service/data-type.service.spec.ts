import { TestBed, inject } from '@angular/core/testing';

import { DataTypeService } from './data-type.service';

describe('DataTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTypeService]
    });
  });

  it('should be created', inject([DataTypeService], (service: DataTypeService) => {
    expect(service).toBeTruthy();
  }));
});
