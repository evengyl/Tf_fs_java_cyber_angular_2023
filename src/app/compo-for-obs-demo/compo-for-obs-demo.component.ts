import { Component } from '@angular/core';
import { DemoObsService } from '../demo/obs/demo-obs.service';
import { StateStoreService } from '../shared/state-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compo-for-obs-demo',
  templateUrl: './compo-for-obs-demo.component.html'
})
export class CompoForObsDemoComponent {

  testNumber! : number 
  messageBehaviorObs! : string 
  
  isConnect! : Observable<boolean>
  userInfos! : Observable<any>

    constructor(private obsServe : DemoObsService, private stateStoreServe : StateStoreService){

      this.isConnect = this.stateStoreServe.isConnect$
      this.userInfos = this.stateStoreServe.userInfos$
      
      this.obsServe.simpleObsNumber$.subscribe((data : number) => {
        this.testNumber = data
      })


      this.obsServe.messageBehaviorObs$.subscribe((message : string) => {
        this.messageBehaviorObs = message
      })
    }
}
