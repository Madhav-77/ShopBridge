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
