import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-part2',
  templateUrl: './directives-part2.component.html',
  styleUrls: ['./directives-part2.component.scss']
})
export class DirectivesPart2Component {
  listHorseMan : any[] = [
    { name : "Mort", colorHorse : "White" },
    { name : "Guerre", colorHorse : "Red" },
    { name : "Famine", colorHorse : "Black" },
    { name : "Pestillance", colorHorse : "Green" },
  ]


  listClient : any[] = [
    { name : "Julie", inOrdered : true },
    { name : "Georges", inOrdered : false },
    { name : "Didier", inOrdered : false },
    { name : "Hervé", inOrdered : true },
    { name : "Brian", inOrdered : true }
  ]


  setColorHorse(color : string)
  {
    if(color == "White") return "grey"
    else if(color == "Red") return "red"
    else if(color == "Black") return "black"
    else if(color == "Green") return "green"
    
    return "chartreuse"
  }


  getClassClient(inOrdered : boolean)
  {
    if(inOrdered) return "alert-success"
    else return "alert-danger"
  }


  regularClient(name : string)
  {
    this.listClient = this.listClient.map((client) => {
      if(client.name == name) client.inOrdered = true

      return client
    })

  }

  discardClient(name : string)
  {
    this.listClient = this.listClient.map((client) => {
      if(client.name == name) client.inOrdered = false

      return client
    })
  }
}
