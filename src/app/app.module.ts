import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterCardsComponent } from './character-cards/character-cards.component';
import { CharacterComponent } from './character/character.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CharacterInfosComponent } from './character-infos-component/character-infos.component';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardsComponent,
    CharacterComponent,
    InputSearchComponent,
    CharacterInfosComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
