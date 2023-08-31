import { Component } from '@angular/core';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html'
})
export class TopPlayersComponent {

  isAdmin : boolean = false

  listTopPlayers : any[] = [
    { name : "Julie", ranked : 1, win : 15669, loose : 145, avatar : "toto.jpg", money : 1200 },
    { name : "Georges", ranked : 2, win : 15650, loose : 245, avatar : "toto.jpg", money : 10 },
    { name : "Didier", ranked : 3, win : 15640, loose : 4, avatar : "toto.jpg", money : 110 },
    { name : "Hervé", ranked : 4, win : 15620, loose : 1256, avatar : "toto.jpg", money : 120 },
    { name : "Brian", ranked : 5, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 }
  ]


  asc(){
    this.listTopPlayers.sort((a, b) => {
      if(a.ranked < b.ranked) return -1

      else if(a.ranked > b.ranked) return 1

      return 0
    })
  }


  desc(){
    this.listTopPlayers.sort((a, b) => {
      if(a.ranked > b.ranked) return -1

      else if(a.ranked < b.ranked) return 1

      return 0
    })
  }

  setAdmin(){
    this.isAdmin = !this.isAdmin
  }


  ban(name : string){
    this.listTopPlayers = this.listTopPlayers.filter((player) => {
      if(player.name == name) return false
      
      return true
    })
  }
}
