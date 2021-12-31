import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPokemonComponent } from '../show-pokemon.component';

const routes: Routes = [
  { path: 'show', component: ShowPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleShowPokemonRoutingModule { }
