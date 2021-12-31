import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Result } from 'src/app/models/pokemons';
import { PokemonService } from 'src/app/show-pokemon/pokemon.service';

@Component({
  selector: 'app-specific-pokemon',
  templateUrl: './specific-pokemon.component.html',
  styleUrls: ['./specific-pokemon.component.css']
})
export class SpecificPokemonComponent implements OnInit {


  @Input()
  result!: Result;
  
  resultado!:Pokemon;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getSpecificPokemon();
  }

  getSpecificPokemon(){
    this.service.getPokemon(this.result.url).subscribe((pokemon: Pokemon) => {
      this.resultado = pokemon;
    });
  }

}
