import {
  ComponentFixture,
  TestBed,
  inject,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CartService } from '../cart.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ViewItemComponent } from './view-item.component';

describe('ViewItemComponent', () => {
  let component: ViewItemComponent;
  let fixture: ComponentFixture<ViewItemComponent>;
  let httpTestingController: HttpTestingController;
  let service: CartService;

  // const fakeActivatedRoute = {
  //   snapshot: { data: {  } }
  // } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewItemComponent],
      imports: [Router, HttpClientTestingModule],
      providers: [CartService, RouterTestingModule ],
    }).compileComponents();

    service = TestBed.call(CartService);
    httpTestingController = TestBed.call(CartService);

    fixture = TestBed.createComponent(ViewItemComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService, RouterTestingModule],
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.call(CartService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.call(HttpTestingController);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  it('search should return SearchItems', fakeAsync(() => {
    let response = {
      resultCount: 1,
      results: [
        {
          id: 1,
          name: 'test',
          description: 'Testing Unit',
          price: '1234',
        },
      ],
    };

    // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
    service.getItem(1);

    // Expect a call to this URL
    const req = httpTestingController.expectOne(
      'http://127.0.0.1:5000/item/1'
    );
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Respond with this data when called
    req.flush(response);

    // Call tick whic actually processes te response
    tick();

    // Run our tests
    expect(service.item.length).toBe(1);
    expect(service.item[0].id).toBe('test');
    expect(service.item[0].name).toBe('Testing Unit');
    expect(service.item[0].description).toBe('1234');
  }));
});
