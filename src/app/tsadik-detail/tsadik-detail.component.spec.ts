import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsadikDetailComponent } from './tsadik-detail.component';

describe('TsadikDetailComponent', () => {
  let component: TsadikDetailComponent;
  let fixture: ComponentFixture<TsadikDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsadikDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsadikDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
