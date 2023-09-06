import { Component } from '@angular/core';
import { DemoObsService } from './demo-obs.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html'
})
export class ObsComponent {

  simpleObsNumber! : number
  messageBehaviorObs! : string
  newMessage! : string


  constructor(private obsServe : DemoObsService){

    this.obsServe.simpleObsNumber$.subscribe((data : number) => {
      this.simpleObsNumber = data
    }) 

    let abonnementBehavior = this.obsServe.messageBehaviorObs$.subscribe({
      next : (message : string) => {
        this.messageBehaviorObs = message
      },
      error : (err : any) => {
        console.log(err)
      },
      complete : () => {
        console.log("Final state")
      }      
    })
  }


  
  changeValueBehavior()
  {
    this.obsServe.emitterMessageBehavior(this.newMessage)
  }
}
