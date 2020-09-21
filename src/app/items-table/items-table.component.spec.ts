import { ComponentFixture, async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ItemsTableComponent } from './items-table.component';
import { CartService } from '../cart.service';
import { delay } from 'rxjs/operators';

describe('ItemsTableComponent', () => {
  let component: ItemsTableComponent;
  let fixture: ComponentFixture<ItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        ItemsTableComponent
      ],
      providers: [
        CartService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getItems and return []', fakeAsync(() => {
    let fixture = TestBed.createComponent(ItemsTableComponent);
    let component = fixture.debugElement.componentInstance;
    let appService = fixture.debugElement.injector.get(CartService);
    let stub = spyOn(appService, "getItems").and.callFake(() => {
      return of([]).pipe(delay(300));
    })
    component.getItems();
    tick(300);
    expect(component.items).toEqual([]);
  }))

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
