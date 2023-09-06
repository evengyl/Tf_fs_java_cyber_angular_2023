import { Component } from '@angular/core';
import { StateStoreService } from './shared/state-store.service';

@Component({
  selector: 'app-root',
  template : `
    <app-compo-for-obs-demo></app-compo-for-obs-demo>
    <app-nav></app-nav>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'COucou';

  constructor(private stateStoreServe : StateStoreService){
    
  }
}
