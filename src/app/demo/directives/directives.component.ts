import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent {

  textIsShow : boolean = true
  isLoggedIn : boolean = true

  listHorseMan : any[] = [
    { name : "Mort", colorHorse : "White" },
    { name : "Guerre", colorHorse : "Red" },
    { name : "Famine", colorHorse : "Black" },
    { name : "Pestillance", colorHorse : "Green" },
  ]

  
  show(){
    this.textIsShow = true
  }

  hide(){
    this.textIsShow = false
  }


  connect(){
    this.isLoggedIn = !this.isLoggedIn
  }


}
