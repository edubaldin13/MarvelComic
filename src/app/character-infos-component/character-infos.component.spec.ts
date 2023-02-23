import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterInfosComponent } from './character-infos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


describe('CharacterInfosComponent', () => {
  let component: CharacterInfosComponent;
  let fixture: ComponentFixture<CharacterInfosComponent>;
  let http: HttpClient

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfosComponent ],
      imports: [ HttpClientTestingModule,RouterTestingModule ],
      providers: [
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
