import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Input() characterName: any;
  @Input() characterDescription: any;
  @Input() characterThumb: any;
  @Input() index: any;
  characterThumbUpdate: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getImg();
  }
  getImg(): void {
    (this.characterThumbUpdate = this.characterThumb?.concat(
      '/portrait_xlarge.jpg'
    ))?.toString();
  }
  goToInfos() {
    this.router.navigate(['/infos', this.index]);
  }
}
