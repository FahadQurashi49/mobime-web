import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSearchGridItemComponent } from './ad-search-grid-item.component';

describe('AdSearchGridItemComponent', () => {
  let component: AdSearchGridItemComponent;
  let fixture: ComponentFixture<AdSearchGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSearchGridItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSearchGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
