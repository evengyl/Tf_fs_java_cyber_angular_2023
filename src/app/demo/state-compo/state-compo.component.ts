import { Component } from '@angular/core';
import { StateStoreService } from 'src/app/shared/state-store.service';

@Component({
  selector: 'app-state-compo',
  templateUrl: './state-compo.component.html'
})
export class StateCompoComponent {

  constructor(private stateStoreServe : StateStoreService){
    this.stateStoreServe.isConnect$.subscribe((stateConnect) => {
      this.isConnect = stateConnect
    })
  }

  isConnect : boolean = false

  login(){
    this.stateStoreServe.setIsConnect(true)
  }

  logout(){
    this.stateStoreServe.setIsConnect(false)

  }

  fakeSend(){
    if(this.stateStoreServe.getIsConnect()){
      //ok je suis a true au niveau connexion je peux envoyer le form
    }
  }
}
