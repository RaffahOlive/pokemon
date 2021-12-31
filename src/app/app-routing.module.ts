import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPokemonComponent } from './show-pokemon/show-pokemon.component';

const routes: Routes = [{ path: '', component: ShowPokemonComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
