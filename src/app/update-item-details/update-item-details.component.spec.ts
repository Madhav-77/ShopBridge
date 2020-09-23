import { ComponentFixture, inject, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { from, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from '../cart.service';
import { delay } from 'rxjs/operators';
import { UpdateItemDetailsComponent } from './update-item-details.component';

describe('UpdateItemDetailsComponent', () => {
  let component: UpdateItemDetailsComponent;
  let fixture: ComponentFixture<UpdateItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemDetailsComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  /* beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); */

  it('should call getItem() and return []', fakeAsync(() => {
    let fixture = TestBed.createComponent(UpdateItemDetailsComponent);
    let componentNew = fixture.debugElement.componentInstance;
    let appService = fixture.debugElement.injector.get(CartService);
    let stub = spyOn(appService, "getItem").and.callFake(() => {
      return of([]).pipe(delay(300));
    })
    componentNew.getItems();
    tick(300);
    expect(componentNew.items).toEqual(null);
  }))

 /*  it('should create', () => {
    expect(TestBed.createComponent(UpdateItemDetailsComponent).componentInstance).toBeDefined();
  }); */

  /* beforeEach(inject([UpdateItemDetailsComponent], (addItems: UpdateItemDetailsComponent) => {
    component = addItems;
  })); */

  it("should form check", () => {
    let name = component.inventoryForm.controls['name'];
    name.setValue("!@#"); 
    let price = component.inventoryForm.controls['price'];
    price.setValue(5000);
    let description = component.inventoryForm.controls['description'];
    description.setValue("new mobile Mobile test");

    expect(component.inventoryForm.invalid).toBeTruthy();
  });
});
