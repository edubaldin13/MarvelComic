import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-character-cards',
  templateUrl: './character-cards.component.html',
  styleUrls: ['./character-cards.component.css'],
})
export class CharacterCardsComponent implements OnInit {
  public characters: any[] = [];
  searchText: string = '';

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.listCharacterCards();
  }

  listCharacterCards(page?: number): void {
    this.cardService.listCharacters(page).subscribe((cards) => {
      this.characters = cards.data.results;
    });
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
  loadMoreCards() {
    this.listCharacterCards(12);
  }
}
