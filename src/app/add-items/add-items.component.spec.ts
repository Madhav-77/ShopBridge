import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CartService } from '../cart.service';
import { AddItemsComponent } from './add-items.component';
import { FileValidation } from '../file-validation';

describe('Shallow', () => {
  let component: AddItemsComponent;
  let fixture: ComponentFixture<AddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CartService, AddItemsComponent ]
    })
    .compileComponents();
  });

  /* it('should send credentials on submit', () => {
    let fixture = TestBed.createComponent(AddItemsComponent);
    let component: AddItemsComponent = fixture.componentInstance;
    let element = fixture.nativeElement;

    fixture.detectChanges();

    element.querySelector('#name').value = expectedEmail;
    element.querySelector('#name').dispatchEvent(new Event('input'));
    element.querySelector('#login-password').value = expectedPassword;
    element.querySelector('#login-password').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.isProcessing.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    element.querySelector('button[type="submit"]').click();
  }); */

  beforeEach(inject([AddItemsComponent], (addItems: AddItemsComponent) => {
    component = addItems;
  }));

  it("should form check", () => {
    let name = component.addItemForm.controls['name'];
    name.setValue("!@#");
    let price = component.addItemForm.controls['price'];
    price.setValue(5000);
    let description = component.addItemForm.controls['description'];
    description.setValue("new mobile Mobile test");

    expect(component.addItemForm.invalid).toBeTruthy();
  });

  // it('should create', () => {
  //   expect(component).toBeDefined();
  // });

  // it('should not create', () => {
  //   expect(component).toBeFalsy();
  // });
});
