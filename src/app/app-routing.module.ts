import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CharacterCardsComponent } from './character-cards/character-cards.component';
import { CharacterInfosComponent } from './character-infos-component/character-infos.component';



const routes: Routes = [
  {path: '', component: CharacterCardsComponent},
  {path: 'infos/:id', component: CharacterInfosComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
