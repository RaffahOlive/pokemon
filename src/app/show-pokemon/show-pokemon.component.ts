import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Pokemons } from '../models/pokemons';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;

  pokemon = {} as Pokemons;
  resultado: Pokemons | undefined;

  constructor(private service: PokemonService) { }


  ngOnInit(): void {
    this.getPokemons();
    this.paginator.lastPage = () => {
      console.log("CHEGUEI")
    };
  }


  getPokemons() {
    this.service.getPokemons("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20").subscribe((pokemon: Pokemons) => {
      this.resultado = pokemon;
    });
  }

  getNextPreviousPokemon(event: any){
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${event.pageIndex * 20}&limit=20`
    this.service.getPokemons(url).subscribe((pokemon: Pokemons) => {
      this.resultado = pokemon;
    });
  }

}
