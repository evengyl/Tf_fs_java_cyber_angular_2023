import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isConnect : boolean = false

  listArticles : any[] = [
    { name : "Pommes", qty : 1, dateAjout : new Date() },
    { name : "Poires", qty : 2, dateAjout : new Date() },
  ]

  constructor() {
    let stateConnect = localStorage.getItem("isConnect")

    if(stateConnect == null)
      this.isConnect = false
    else if(stateConnect == "true")
      this.isConnect = true
    else if(stateConnect == "false")
      this.isConnect = false
  }

  
  login(){
    localStorage.setItem("isConnect", "true")
    return this.isConnect = true
  }

  logout(){
    localStorage.setItem("isConnect", "false")
    return this.isConnect = false
  }

  clearLocalStorage(){
    localStorage.clear()
  }


  storeArticles(){
    localStorage.setItem("listArticles", JSON.stringify(this.listArticles))
  }
}
