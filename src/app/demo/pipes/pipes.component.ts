import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
    upper: string = 'Hello Hervé';
    lower: string = 'JE REGARDE DES VIDÉOS SUR LE NET ET J\'OUBLIE DE ME MUTE';
    dateDujour: Date = new Date();
    accountBalance : number = 4200

    dataDebug : any[] = [
      { name : "Jean charles edouard 1", country : "UK", lang : "Swedish" },
      { name : "Jean charles edouard 2", country : "USA", lang : "Swedish" },
      { name : "Jean charles edouard 3", country : "BE", lang : "Swedish" },
      { name : "Jean charles edouard 4", country : "USA", lang : "Swedish" }
    ]

    priceHTVA : number = 1459.53
    tauxTVAClient : number = 12
}
