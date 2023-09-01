import { Component } from '@angular/core';
import { FakeAuthService } from './fake-auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ["./services.scss"]
})
export class ServicesComponent {

  constructor(private fakeAuthServe : FakeAuthService){
    this.isConnect = this.fakeAuthServe.isConnect
  }
  
  isConnect : boolean = false
  
  login(){
    this.isConnect = this.fakeAuthServe.login()
  }

  logout(){
    this.isConnect = this.fakeAuthServe.logout()
  }


  clearLocalStorage(){
    this.fakeAuthServe.clearLocalStorage()
  }

  storeArticles(){
    this.fakeAuthServe.storeArticles()
  }
}
