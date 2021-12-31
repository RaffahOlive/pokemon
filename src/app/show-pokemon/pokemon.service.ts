import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Pokemons } from '../models/pokemons';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  getPokemons(url: string): Observable<Pokemons>{
    return this.httpClient.get<Pokemons>(url)
    .pipe(
      retry(2),
      catchError(this.handleError))


  }

  getPokemon(url: string): Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
