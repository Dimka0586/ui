import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeFieldNodeComponent } from './add-type-field-node.component';

describe('AddTypeFieldNodeComponent', () => {
  let component: AddTypeFieldNodeComponent;
  let fixture: ComponentFixture<AddTypeFieldNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeFieldNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeFieldNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
