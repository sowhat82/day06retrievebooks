import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievebooksComponent } from './retrievebooks.component';

describe('RetrievebooksComponent', () => {
  let component: RetrievebooksComponent;
  let fixture: ComponentFixture<RetrievebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievebooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
