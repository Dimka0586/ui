import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeFieldNodeComponent } from './view-type-field-node.component';

describe('ViewTypeFieldNodeComponent', () => {
  let component: ViewTypeFieldNodeComponent;
  let fixture: ComponentFixture<ViewTypeFieldNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTypeFieldNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTypeFieldNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
