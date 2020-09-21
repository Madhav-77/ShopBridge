import { ComponentFixture, async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { from, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from '../cart.service';
import { delay } from 'rxjs/operators';
import { UpdateItemDetailsComponent } from './update-item-details.component';
// import { DynamicFormComponent } from './dynamic-form.component';

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

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should call getItem() and return []', fakeAsync(() => {
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

  it('should create', () => {
    expect(TestBed.createComponent(UpdateItemDetailsComponent).componentInstance).toBeDefined();
  }); */
});
