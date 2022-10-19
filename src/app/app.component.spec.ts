import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement} from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let db: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });
  //toDo

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
