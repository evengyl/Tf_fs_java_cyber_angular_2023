import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseUrl : string = "https://pokeapi.co/api/v2/pokemon/"
  linkPrevious : string = ""
  linkNext : string = ""

  constructor(private httpC : HttpClient) { }


  getPokemons()
  {
    return this.httpC.get(this.baseUrl)
  }

  
  next20(urlNext : string){
    return this.httpC.get(urlNext)
  } 

  previous20(urlPrevious : string){
    return this.httpC.get(urlPrevious)
  }

  getImg(url : string){
    return this.httpC.get(url)
  }
}
