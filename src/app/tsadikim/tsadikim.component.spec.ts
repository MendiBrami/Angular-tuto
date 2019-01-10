import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsadikimComponent } from './tsadikim.component';

describe('TsadikimComponent', () => {
  let component: TsadikimComponent;
  let fixture: ComponentFixture<TsadikimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsadikimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsadikimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
