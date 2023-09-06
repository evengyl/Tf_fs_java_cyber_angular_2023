import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoObsService {

  simpleObsNumber$! : Observable<number>
  simpleObsNumber : number = 42

  messageBehaviorObs : string = "Un message pour les compo abonné, kiss"
  messageBehaviorObs$ : BehaviorSubject<string> = new BehaviorSubject<string>(this.messageBehaviorObs)

  constructor() {
    this.simpleObsNumber$ = of(this.simpleObsNumber)
  }


  reEmitOfValue(){
    this.simpleObsNumber$ = of(this.simpleObsNumber).pipe(
      map(x => x*2)
    )
  }

  emitterMessageBehavior(newMessage : string)
  {
    this.messageBehaviorObs$.next(newMessage)
  }

}
