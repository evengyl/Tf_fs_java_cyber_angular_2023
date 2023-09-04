import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardsAuthService {

  isConnectGuard : boolean | null = null

    constructor()
    {
        let localStorageConnectValue = localStorage.getItem("isConnectGuard")

        if(localStorageConnectValue == null)
            this.isConnectGuard = false
        else
            this.isConnectGuard = true
    }

    loginGuard()
    {
      localStorage.setItem("isConnectGuard", "true")
      return this.isConnectGuard = true
    }
  
    logoutGuard()
    {
      localStorage.removeItem("isConnectGuard")
      return this.isConnectGuard = false
    }
}
