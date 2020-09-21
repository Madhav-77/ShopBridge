import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
// import {  } from '@angular/hero';

describe('CartService', () => {
  let service: CartService;
  let httpClientSpy: { get: jasmine.Spy };
  let cartService: CartService;
  // let inv: Inventory;

  /* beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    cartService = new CartService(httpClientSpy as any);
  });
 */
  /* it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    heroService.getHeroes().subscribe(
      heroes => fail('expected an error, not heroes'),
      error  => expect(error.message).toContain('test 404 error')
    );
  }); */

  // it('#getValue should return real value from the real service', () => {
  //   service = new CartService(new ValueService());
  //   expect(service.getValue()).toBe('real value');
  // });

  /* it('should be created', () => {
    expect(service).toBeTruthy();
  }); */
});
