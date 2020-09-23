import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartService } from '../cart.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ViewItemComponent } from './view-item.component';

describe('ViewItemComponent', () => {
  let component: ViewItemComponent;
  let crtsrv: CartService;
  let fixture: ComponentFixture<ViewItemComponent>;

  // const fakeActivatedRoute = {
  //   snapshot: { data: {  } }
  // } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemComponent ],
      imports: [ crtsrv, Location, 
        , Router, HttpClientModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewItemComponent);
    component = fixture.componentInstance;

  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ViewItemComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
