import { ComponentFixture, async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ItemsTableComponent } from './items-table.component';
import { CartService } from '../cart.service';
import { delay } from 'rxjs/operators';
import { Inventory } from '../inventory';

describe('ItemsTableComponent', () => {
  let component: ItemsTableComponent;
  let fixture: ComponentFixture<ItemsTableComponent>;
  let cartService: CartService;
  let mockTests: HttpTestingController;

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

    // cartService = TestBed.get(CartService);
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
  }));
/* 
  afterEach(() => {
    mockTests.verify();
  })

  it("should get items from the api via GET method", () => {
    const dummyItems: Inventory[] = [
      {id: 1, name: "Madhav", description: "Unit test run", price: "123"},
      {id: 2, name: "New test", description: "Test entry", price: "5642"}
    ];

    cartService.getItems().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(dummyItems);
    });

    const req = mockTests.expectOne(`${cartService.url}/items`);

    expect(req.request.method).toBe('GET');

    req.flush(dummyItems);
  }); */
  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
