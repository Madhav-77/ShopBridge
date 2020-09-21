import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemDetailsComponent } from './update-item-details.component';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
