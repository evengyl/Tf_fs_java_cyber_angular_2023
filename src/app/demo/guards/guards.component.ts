import { Component } from '@angular/core';
import { GuardsAuthService } from './guards-auth.service';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html'
})
export class GuardsComponent {

  isConnectGuard : boolean = false

  constructor(private guardAuthServe : GuardsAuthService){
    this.isConnectGuard = this.guardAuthServe.isConnectGuard ? true : false
  }

  loginGuard()
  {
    this.isConnectGuard = this.guardAuthServe.loginGuard()
  }

  logoutGuard()
  {
    this.isConnectGuard = this.guardAuthServe.logoutGuard()
  }
}
