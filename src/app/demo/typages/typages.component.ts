import { Component } from '@angular/core';
import { Article, ArticleV2 } from './models/Article.model';
import { Sin } from './models/Sin.type';
import { Player, Players } from './models/Player.interface';

@Component({
  selector: 'app-typages',
  templateUrl: './typages.component.html'
})
export class TypagesComponent {

  listArticles : Article[] = [
    { name : "Pommes", qty : 1, dateAjout : new Date() },
    { name : "Poires", qty : 2, dateAjout : new Date() },
  ]


  listSins : Sin[] = [
    { name : "Orgueil", traduction : "Superbia"},
    { name : "Avarice", traduction : "Avaritia" },
    { name : "Luxure", traduction : "Luxuria" },
    { name : "Envie", traduction : "Invidia" },
    { name : "Gourmandise", traduction : "Gula" },
    { name : "Colère", traduction : "Ira" },
    { name : "Paresse", traduction : "Acedia" }
  ]

  listTopPlayers : Players = {
    playersList : [
      { name : "Julie", ranked : 1, win : 15669, loose : 145, avatar : "toto.jpg", money : 1200 },
      { name : "Georges", ranked : 2, win : 15650, loose : 245, avatar : "toto.jpg", money : 10 },
      { name : "Didier", ranked : 3, win : 15640, loose : 4, avatar : "toto.jpg", money : 110 },
      { name : "Hervé", ranked : 4, win : 15620, loose : 1256, avatar : "toto.jpg", money : 120 },
      { name : "Brian", ranked : 5, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 }
    ],
    ban : (player : Player) => { return true },
    desc : () => { },
    asc : () => {}
  }

 

  constructor()
  {
    let newArt = new Article("Banane", 4, new Date())
    this.listArticles.push(newArt)

    //let newSin = new Sin --> impossible ! typage pur !


    let newArtV2 = new ArticleV2()
    //newArtV2.ttc = 5 --> pas de setter !!!
    newArtV2.dateAjout = new Date()
    newArtV2.name = "Super props"
    newArtV2.qty = 145

    console.log(newArtV2.ttc)

  }
}
