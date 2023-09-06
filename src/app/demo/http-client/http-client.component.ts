import { Component } from '@angular/core';
import { PokeService } from './poke.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html'
})
export class HttpClientComponent {

  datasPokemons : any = {}
  imgCurrentPoke! : string

  constructor(private pokeServe : PokeService){
    this.pokeServe.getPokemons().subscribe((datas : any) => {
      this.datasPokemons = datas
    })
  }

  next20(){
    this.pokeServe.next20(this.datasPokemons.next).subscribe((datas : any) => {
      this.datasPokemons = datas
    })
  }

  previous20(){

    this.pokeServe.previous20(this.datasPokemons.previous).subscribe((datas : any) => {
      this.datasPokemons = datas
    })
  }

  getImg(url : string){
    this.pokeServe.getImg(url).subscribe((datas : any) => {
        this.imgCurrentPoke = datas.sprites.other.dream_world.front_default
    })
  }

}
