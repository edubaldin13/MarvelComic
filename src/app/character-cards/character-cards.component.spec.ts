import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { CharacterCardsComponent } from './character-cards.component';

describe('CharacterCardsComponent', () => {
  let component: CharacterCardsComponent;
  let fixture: ComponentFixture<CharacterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardsComponent ],
      imports: [HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
