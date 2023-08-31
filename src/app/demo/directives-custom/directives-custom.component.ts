import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-custom',
  templateUrl: './directives-custom.component.html',
  styleUrls: ['./directives-custom.component.scss']
})
export class DirectivesCustomComponent {

  colorForMamy : string = "yellow"
  fontSizeMamy : string = "15"
  
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
