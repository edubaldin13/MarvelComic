import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-character-infos',
  templateUrl: './character-infos.component.html',
  styleUrls: ['./character-infos.component.css'],
})
export class CharacterInfosComponent implements OnInit {
  id: any;
  character: any;
  characterThumb: any;
  characterName: any;
  characterThumbNew: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService
  ) {}

  async ngOnInit() {
    await this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    await this.listCharacterCards();
  }

  listCharacterCards(): void {
    this.cardService.listCharacters().subscribe((cards) => {
      this.character = cards.data.results[this.id];
      this.characterThumb = this.character.thumbnail.path;
      this.getImg();
    });
  }

  getImg(): void {
    (this.characterThumbNew = this.characterThumb.concat(
      '/portrait_incredible.jpg'
    )).toString();
  }
}
